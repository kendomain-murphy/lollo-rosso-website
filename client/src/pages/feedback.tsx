import { useState } from "react";
import { ReservationNavigation } from "@/components/ReservationNavigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, Send, CheckCircle } from "lucide-react";
import logo from "@assets/LR_NewLogo_TP_ext_1761393901272.png";

const outlets = [
  "Bodakdev, Ahmedabad",
  "Alembic City, Baroda",
  "SVP Airport",
  "Vijay Cross Road, Ahmedabad",
  "Adani Shantigram",
];

const diningTypes = [
  "Dine-in",
  "Takeaway",
  "Delivery",
];

function StarRating({
  value,
  onChange,
  label,
  testIdPrefix,
}: {
  value: number;
  onChange: (val: number) => void;
  label: string;
  testIdPrefix: string;
}) {
  const [hoverValue, setHoverValue] = useState(0);

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">{label}</Label>
      <div className="flex gap-1" data-testid={`rating-${testIdPrefix}`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(value === star ? 0 : star)}
            onMouseEnter={() => setHoverValue(star)}
            onMouseLeave={() => setHoverValue(0)}
            className="p-1 transition-transform hover:scale-110"
            data-testid={`button-star-${testIdPrefix}-${star}`}
          >
            <Star
              className={`h-7 w-7 transition-colors ${
                star <= (hoverValue || value)
                  ? "fill-amber-400 text-amber-400"
                  : "text-muted-foreground/30"
              }`}
            />
          </button>
        ))}
        {value > 0 && (
          <span className="ml-2 text-sm text-muted-foreground self-center">
            {value}/5
          </span>
        )}
      </div>
    </div>
  );
}

export default function FeedbackPage() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [outlet, setOutlet] = useState("");
  const [overallRating, setOverallRating] = useState(0);
  const [foodRating, setFoodRating] = useState(0);
  const [serviceRating, setServiceRating] = useState(0);
  const [ambianceRating, setAmbianceRating] = useState(0);
  const [visitDate, setVisitDate] = useState("");
  const [diningType, setDiningType] = useState("");
  const [comments, setComments] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<{ name?: string; mobile?: string }>({});

  const validate = () => {
    const newErrors: { name?: string; mobile?: string } = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (mobile.replace(/\D/g, "").length < 10) {
      newErrors.mobile = "Please enter a valid mobile number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError("");
    try {
      const formData = new URLSearchParams();
      formData.append("form-name", "feedback");
      formData.append("name", name.trim());
      formData.append("mobile", mobile.trim());
      formData.append("email", email.trim());
      formData.append("outlet", outlet);
      formData.append("overallRating", overallRating ? String(overallRating) : "");
      formData.append("foodRating", foodRating ? String(foodRating) : "");
      formData.append("serviceRating", serviceRating ? String(serviceRating) : "");
      formData.append("ambianceRating", ambianceRating ? String(ambianceRating) : "");
      formData.append("visitDate", visitDate);
      formData.append("diningType", diningType);
      formData.append("comments", comments.trim());

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Failed to submit feedback:", err);
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <ReservationNavigation />
        <div className="flex items-center justify-center min-h-screen px-6">
          <Card className="p-8 max-w-md text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h2 className="font-serif text-2xl font-bold mb-3" data-testid="text-feedback-success-title">
              Thank You!
            </h2>
            <p className="text-muted-foreground mb-6" data-testid="text-feedback-success-message">
              Your feedback has been submitted successfully. We appreciate you taking the time to help us improve.
            </p>
            <Button asChild data-testid="button-back-home">
              <a href="/">Back to Home</a>
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <ReservationNavigation />
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <img src={logo} alt="Lollo Rosso" className="h-14 w-auto mx-auto mb-4" data-testid="img-feedback-logo" />
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2" data-testid="text-feedback-title">
              We Value Your Feedback
            </h1>
            <p className="text-muted-foreground" data-testid="text-feedback-subtitle">
              Help us serve you better. Share your dining experience with us.
            </p>
          </div>

          <Card className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    data-testid="input-feedback-name"
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive" data-testid="error-name">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile">
                    Mobile Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="+91 98765 43210"
                    type="tel"
                    data-testid="input-feedback-mobile"
                  />
                  {errors.mobile && (
                    <p className="text-sm text-destructive" data-testid="error-mobile">{errors.mobile}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    type="email"
                    data-testid="input-feedback-email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="outlet">Restaurant Outlet</Label>
                  <Select value={outlet} onValueChange={setOutlet}>
                    <SelectTrigger data-testid="select-feedback-outlet">
                      <SelectValue placeholder="Select outlet" />
                    </SelectTrigger>
                    <SelectContent>
                      {outlets.map((o) => (
                        <SelectItem key={o} value={o} data-testid={`option-outlet-${o.replace(/[^a-zA-Z]/g, "-").toLowerCase()}`}>
                          {o}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="visitDate">Date of Visit</Label>
                  <Input
                    id="visitDate"
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                    type="date"
                    data-testid="input-feedback-visit-date"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="diningType">Dining Type</Label>
                  <Select value={diningType} onValueChange={setDiningType}>
                    <SelectTrigger data-testid="select-feedback-dining-type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {diningTypes.map((dt) => (
                        <SelectItem key={dt} value={dt} data-testid={`option-dining-${dt.toLowerCase()}`}>
                          {dt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="border-t pt-6 space-y-4">
                <h3 className="font-serif text-lg font-semibold" data-testid="text-ratings-heading">
                  Rate Your Experience
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <StarRating
                    value={overallRating}
                    onChange={setOverallRating}
                    label="Overall Experience"
                    testIdPrefix="overall"
                  />
                  <StarRating
                    value={foodRating}
                    onChange={setFoodRating}
                    label="Food Quality"
                    testIdPrefix="food"
                  />
                  <StarRating
                    value={serviceRating}
                    onChange={setServiceRating}
                    label="Service"
                    testIdPrefix="service"
                  />
                  <StarRating
                    value={ambianceRating}
                    onChange={setAmbianceRating}
                    label="Ambiance"
                    testIdPrefix="ambiance"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="comments">Additional Comments</Label>
                <Textarea
                  id="comments"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="Tell us more about your experience..."
                  rows={4}
                  data-testid="textarea-feedback-comments"
                />
              </div>

              {submitError && (
                <p className="text-sm text-destructive text-center" data-testid="text-submit-error">
                  {submitError}
                </p>
              )}

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
                data-testid="button-submit-feedback"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Submit Feedback
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}

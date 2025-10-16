import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface ConsultationRequestFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ConsultationRequestForm = ({ open, onOpenChange }: ConsultationRequestFormProps) => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    company_name: "",
    consultation_type: "",
    project_description: "",
    main_goal: "",
    expected_outcome: "",
    preferred_date: "",
    preferred_time: "",
    time_zone: "",
    meeting_mode: "",
    how_heard: "",
    questions_notes: "",
    consent_agreed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent_agreed) {
      toast.error("Please agree to be contacted");
      return;
    }
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("consultation_requests").insert([formData]);

      if (error) throw error;

      toast.success("Consultation request submitted! We'll contact you soon.");
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        company_name: "",
        consultation_type: "",
        project_description: "",
        main_goal: "",
        expected_outcome: "",
        preferred_date: "",
        preferred_time: "",
        time_zone: "",
        meeting_mode: "",
        how_heard: "",
        questions_notes: "",
        consent_agreed: false,
      });
      onOpenChange(false);
    } catch (error) {
      console.error("Error submitting consultation request:", error);
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Schedule a Consultation</DialogTitle>
          <DialogDescription>Fill out the form below and we'll get back to you shortly.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">🧍 Basic Information</h3>
            <div className="space-y-2">
              <Label htmlFor="full_name">Full Name *</Label>
              <Input id="full_name" required value={formData.full_name} onChange={(e) => setFormData({ ...formData, full_name: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number / WhatsApp Number *</Label>
              <Input id="phone" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company_name">Company / Organization Name</Label>
              <Input id="company_name" value={formData.company_name} onChange={(e) => setFormData({ ...formData, company_name: e.target.value })} />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">💬 Consultation Details</h3>
            <div className="space-y-2">
              <Label htmlFor="consultation_type">Type of Consultation *</Label>
              <Input id="consultation_type" required placeholder="e.g., Web Development, AI Solutions, etc." value={formData.consultation_type} onChange={(e) => setFormData({ ...formData, consultation_type: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="project_description">Brief Description of Your Requirement / Project *</Label>
              <Textarea id="project_description" required value={formData.project_description} onChange={(e) => setFormData({ ...formData, project_description: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="main_goal">Main Goal or Problem You Want to Discuss *</Label>
              <Textarea id="main_goal" required value={formData.main_goal} onChange={(e) => setFormData({ ...formData, main_goal: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expected_outcome">Expected Outcome or Service Needed *</Label>
              <Textarea id="expected_outcome" required value={formData.expected_outcome} onChange={(e) => setFormData({ ...formData, expected_outcome: e.target.value })} />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">🕒 Scheduling Preferences</h3>
            <div className="space-y-2">
              <Label htmlFor="preferred_date">Preferred Date for Consultation</Label>
              <Input id="preferred_date" type="date" value={formData.preferred_date} onChange={(e) => setFormData({ ...formData, preferred_date: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferred_time">Preferred Time Slot</Label>
              <Input id="preferred_time" placeholder="Morning / Afternoon / Evening or exact time" value={formData.preferred_time} onChange={(e) => setFormData({ ...formData, preferred_time: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time_zone">Time Zone</Label>
              <Input id="time_zone" placeholder="e.g., EST, PST, IST" value={formData.time_zone} onChange={(e) => setFormData({ ...formData, time_zone: e.target.value })} />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">💻 Consultation Mode</h3>
            <div className="space-y-2">
              <Label htmlFor="meeting_mode">Preferred Mode of Meeting *</Label>
              <Select required value={formData.meeting_mode} onValueChange={(value) => setFormData({ ...formData, meeting_mode: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Google Meet">Google Meet</SelectItem>
                  <SelectItem value="Zoom">Zoom</SelectItem>
                  <SelectItem value="Phone Call">Phone Call</SelectItem>
                  <SelectItem value="In-Person">In-Person</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">📝 Other Details</h3>
            <div className="space-y-2">
              <Label htmlFor="how_heard">How Did You Hear About Us?</Label>
              <Input id="how_heard" value={formData.how_heard} onChange={(e) => setFormData({ ...formData, how_heard: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="questions_notes">Any Questions or Notes Before the Meeting?</Label>
              <Textarea id="questions_notes" value={formData.questions_notes} onChange={(e) => setFormData({ ...formData, questions_notes: e.target.value })} />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">✅ Confirmation</h3>
            <div className="flex items-center space-x-2">
              <Checkbox id="consent" checked={formData.consent_agreed} onCheckedChange={(checked) => setFormData({ ...formData, consent_agreed: checked as boolean })} />
              <Label htmlFor="consent" className="text-sm">I agree to be contacted regarding my consultation request.</Label>
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Schedule My Consultation"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

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

interface InnovationHubApplicationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const InnovationHubApplicationForm = ({ open, onOpenChange }: InnovationHubApplicationFormProps) => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    company_name: "",
    role_position: "",
    project_idea: "",
    problem_solved: "",
    support_needed: "",
    project_stage: "",
    consultation_mode: "",
    preferred_date: "",
    preferred_time: "",
    how_heard: "",
    additional_notes: "",
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
      const { error } = await supabase.from("innovation_hub_applications").insert([formData]);

      if (error) throw error;

      toast.success("Application submitted successfully! We'll reach out soon.");
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        company_name: "",
        role_position: "",
        project_idea: "",
        problem_solved: "",
        support_needed: "",
        project_stage: "",
        consultation_mode: "",
        preferred_date: "",
        preferred_time: "",
        how_heard: "",
        additional_notes: "",
        consent_agreed: false,
      });
      onOpenChange(false);
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Join the Innovation Hub</DialogTitle>
          <DialogDescription>
            Whether you're a startup founder, an enterprise innovator, or a talented individual with a vision, we'd love to hear from you.
            Join the Innovation Hub to collaborate, share ideas, and bring your vision to life.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">🧍 Personal / Company Information</h3>
            <div className="space-y-2">
              <Label htmlFor="full_name">Full Name *</Label>
              <Input id="full_name" required value={formData.full_name} onChange={(e) => setFormData({ ...formData, full_name: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number / WhatsApp Number</Label>
              <Input id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company_name">Company / Organization Name</Label>
              <Input id="company_name" value={formData.company_name} onChange={(e) => setFormData({ ...formData, company_name: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role_position">Your Role / Position</Label>
              <Input id="role_position" value={formData.role_position} onChange={(e) => setFormData({ ...formData, role_position: e.target.value })} />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">💡 Your Vision / Project Idea</h3>
            <div className="space-y-2">
              <Label htmlFor="project_idea">Briefly Describe Your Idea or Project *</Label>
              <Textarea id="project_idea" required placeholder="Tell us what you're working on or planning to create." value={formData.project_idea} onChange={(e) => setFormData({ ...formData, project_idea: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="problem_solved">What Problem Does Your Idea Solve?</Label>
              <Textarea id="problem_solved" value={formData.problem_solved} onChange={(e) => setFormData({ ...formData, problem_solved: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="support_needed">What Kind of Support Are You Looking For? *</Label>
              <Input id="support_needed" required placeholder="e.g., Mentorship, Technical Development, Investment, etc." value={formData.support_needed} onChange={(e) => setFormData({ ...formData, support_needed: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="project_stage">Estimated Stage of Your Idea / Project</Label>
              <Select value={formData.project_stage} onValueChange={(value) => setFormData({ ...formData, project_stage: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select stage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Just an Idea">Just an Idea</SelectItem>
                  <SelectItem value="Early Development">Early Development</SelectItem>
                  <SelectItem value="Prototype / MVP">Prototype / MVP</SelectItem>
                  <SelectItem value="Ready to Launch">Ready to Launch</SelectItem>
                  <SelectItem value="Already Launched">Already Launched</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">🕒 Consultation / Collaboration Details</h3>
            <div className="space-y-2">
              <Label htmlFor="consultation_mode">Preferred Mode of Consultation</Label>
              <Select value={formData.consultation_mode} onValueChange={(value) => setFormData({ ...formData, consultation_mode: value })}>
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
            <div className="space-y-2">
              <Label htmlFor="preferred_date">Preferred Date for Consultation</Label>
              <Input id="preferred_date" type="date" value={formData.preferred_date} onChange={(e) => setFormData({ ...formData, preferred_date: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferred_time">Preferred Time Slot</Label>
              <Input id="preferred_time" placeholder="e.g., Morning, 2 PM" value={formData.preferred_time} onChange={(e) => setFormData({ ...formData, preferred_time: e.target.value })} />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">💬 Additional Information</h3>
            <div className="space-y-2">
              <Label htmlFor="how_heard">How Did You Hear About the Innovation Hub?</Label>
              <Input id="how_heard" value={formData.how_heard} onChange={(e) => setFormData({ ...formData, how_heard: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="additional_notes">Any Additional Notes or Questions?</Label>
              <Textarea id="additional_notes" value={formData.additional_notes} onChange={(e) => setFormData({ ...formData, additional_notes: e.target.value })} />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">✅ Consent</h3>
            <div className="flex items-center space-x-2">
              <Checkbox id="consent" checked={formData.consent_agreed} onCheckedChange={(checked) => setFormData({ ...formData, consent_agreed: checked as boolean })} />
              <Label htmlFor="consent" className="text-sm">I agree to be contacted by the Innovation Hub team regarding my consultation or collaboration request.</Label>
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

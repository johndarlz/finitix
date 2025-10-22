import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface ProjectSubmissionFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ProjectSubmissionForm = ({ open, onOpenChange }: ProjectSubmissionFormProps) => {
  const [formData, setFormData] = useState({
    project_name: "",
    project_description: "",
    key_features: "",
    project_deadline: "",
    team_members: "",
    contact_details: "",
    additional_notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("project_submissions").insert([formData]);

      if (error) throw error;

      toast.success("Project submitted successfully! We'll get back to you soon.");
      setFormData({
        project_name: "",
        project_description: "",
        key_features: "",
        project_deadline: "",
        team_members: "",
        contact_details: "",
        additional_notes: "",
      });
      onOpenChange(false);
    } catch (error) {
      console.error("Error submitting project:", error);
      toast.error("Failed to submit project. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Start Your Project</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="project_name">Project Name *</Label>
            <Input
              id="project_name"
              required
              value={formData.project_name}
              onChange={(e) => setFormData({ ...formData, project_name: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="project_description">Project Description *</Label>
            <Textarea
              id="project_description"
              required
              value={formData.project_description}
              onChange={(e) => setFormData({ ...formData, project_description: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="key_features">Key Features / Functions *</Label>
            <Textarea
              id="key_features"
              required
              value={formData.key_features}
              onChange={(e) => setFormData({ ...formData, key_features: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="project_deadline">Project Deadline</Label>
            <Input
              id="project_deadline"
              type="date"
              value={formData.project_deadline}
              onChange={(e) => setFormData({ ...formData, project_deadline: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="team_members">Team Members / Assigned To</Label>
            <Input
              id="team_members"
              value={formData.team_members}
              onChange={(e) => setFormData({ ...formData, team_members: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact_details">Contact Details (Email / Phone) *</Label>
            <Input
              id="contact_details"
              required
              value={formData.contact_details}
              onChange={(e) => setFormData({ ...formData, contact_details: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="additional_notes">Additional Notes</Label>
            <Textarea
              id="additional_notes"
              value={formData.additional_notes}
              onChange={(e) => setFormData({ ...formData, additional_notes: e.target.value })}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Project"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

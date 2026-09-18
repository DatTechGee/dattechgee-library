import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Shield, Loader2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

export default function OtpPage() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = (location.state as { email?: string })?.email || "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    toast.success("Verified! (Demo)");
    navigate("/auth/reset-password", { state: { email, otp } });
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Shield className="size-6 text-primary" />
          </div>
          <CardTitle className="text-2xl">Enter Code</CardTitle>
          <CardDescription>We sent a 6-digit code to {email || "your email"}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Verification Code</label>
              <Input type="text" placeholder="000000" value={otp} onChange={(e) => setOtp(e.target.value)} maxLength={6} className="text-center text-2xl tracking-[0.5em] font-mono" required />
              <p className="text-xs text-muted-foreground text-center">Demo: enter any 6-digit code</p>
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? <Loader2 className="size-4 animate-spin" /> : "Verify Code"}
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              <Link to="/auth/forgot-password" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                <ArrowLeft className="size-3" /> Back
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { SettingsSection } from "./SettingsSection";
import { Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { useSecurity } from "@/contexts/SecurityContext";
import { validatePassword } from "@/utils/security";
import { useState } from "react";
import { SecurityAudit } from "@/components/security/SecurityAudit";

export const SecuritySettings = () => {
  const { isSecureConnection, securityScore } = useSecurity();
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: ""
  });
  const [passwordStrength, setPasswordStrength] = useState<string[]>([]);

  const handlePasswordChange = (field: string, value: string) => {
    setPasswords(prev => ({ ...prev, [field]: value }));
    
    if (field === "new") {
      const validation = validatePassword(value);
      setPasswordStrength(validation.errors);
    }
  };

  const getSecurityScoreColor = (score: number) => {
    if (score >= 75) return "text-green-600";
    if (score >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <>
      {/* Security Score Dashboard */}
      <SettingsSection
        title="Security Dashboard"
        description="Overall security status and recommendations"
        className="mb-4"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              <div>
                <div className="font-medium">Security Score</div>
                <div className="text-sm text-muted-foreground">
                  Overall security assessment
                </div>
              </div>
            </div>
            <div className={`text-2xl font-bold ${getSecurityScoreColor(securityScore)}`}>
              {securityScore}/100
            </div>
          </div>

          <SecurityAudit />
        </div>
      </SettingsSection>

      {/* Security Status */}
      <SettingsSection
        title="Security Status"
        description="Current security status of your account and connection"
        className="mb-4"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium">Connection Security</div>
                <div className="text-sm text-muted-foreground">
                  {isSecureConnection ? "HTTPS enabled" : "Insecure connection"}
                </div>
              </div>
            </div>
            <Badge variant={isSecureConnection ? "default" : "destructive"}>
              {isSecureConnection ? "Secure" : "Insecure"}
            </Badge>
          </div>

          {!isSecureConnection && (
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Your connection is not secure. Please ensure you're using HTTPS for sensitive operations.
              </AlertDescription>
            </Alert>
          )}

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <div className="font-medium">Input Sanitization</div>
                <div className="text-sm text-muted-foreground">
                  All user inputs are sanitized with DOMPurify
                </div>
              </div>
            </div>
            <Badge variant="default">Active</Badge>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <div className="font-medium">CSRF Protection</div>
                <div className="text-sm text-muted-foreground">
                  Forms protected against cross-site request forgery
                </div>
              </div>
            </div>
            <Badge variant="default">Active</Badge>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <div className="font-medium">Content Security Policy</div>
                <div className="text-sm text-muted-foreground">
                  CSP headers configured to prevent XSS attacks
                </div>
              </div>
            </div>
            <Badge variant="default">Active</Badge>
          </div>
        </div>
      </SettingsSection>

      {/* Password Security */}
      <SettingsSection
        title="Password Security"
        description="Change your password and manage authentication security"
        className="mb-4"
      >
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input 
              id="current-password" 
              type="password" 
              value={passwords.current}
              onChange={(e) => handlePasswordChange("current", e.target.value)}  
              autoComplete="current-password"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input 
              id="new-password" 
              type="password" 
              value={passwords.new}
              onChange={(e) => handlePasswordChange("new", e.target.value)}
              autoComplete="new-password"
            />
            {passwordStrength.length > 0 && (
              <div className="text-xs text-red-500 space-y-1">
                {passwordStrength.map((error, index) => (
                  <div key={index}>• {error}</div>
                ))}
              </div>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input 
              id="confirm-password" 
              type="password" 
              value={passwords.confirm}
              onChange={(e) => handlePasswordChange("confirm", e.target.value)}
              autoComplete="new-password"
            />
            {passwords.new && passwords.confirm && passwords.new !== passwords.confirm && (
              <p className="text-xs text-red-500">Passwords do not match</p>
            )}
          </div>
          <div className="pt-2 flex justify-end">
            <Button disabled={passwordStrength.length > 0 || passwords.new !== passwords.confirm}>
              Update Password
            </Button>
          </div>
        </div>
      </SettingsSection>

      {/* Two-Factor Authentication */}
      <SettingsSection
        title="Two-Factor Authentication"
        description="Add an extra layer of security to your account"
        className="mb-4"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Enable Two-Factor Authentication</div>
              <div className="text-sm text-muted-foreground">
                Secure your account with a second verification step
              </div>
            </div>
            <Switch />
          </div>
          
          <div className="rounded-lg border p-4 bg-muted/30">
            <p className="text-sm text-muted-foreground">
              Two-factor authentication adds an additional layer of security to your account 
              by requiring more than just a password to sign in.
            </p>
          </div>
        </div>
      </SettingsSection>

      {/* Active Sessions */}
      <SettingsSection
        title="Active Sessions"
        description="Manage devices that are currently signed in to your account"
      >
        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <div className="font-medium">Current Session</div>
                <div className="text-sm text-muted-foreground">
                  {navigator.userAgent.includes('Chrome') ? 'Chrome' : 'Browser'} on {navigator.platform} • Active now
                </div>
              </div>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                Current
              </span>
            </div>
          </div>
          
          <div className="pt-2 flex justify-end">
            <Button variant="destructive">Sign Out All Other Devices</Button>
          </div>
        </div>
      </SettingsSection>
    </>
  );
};

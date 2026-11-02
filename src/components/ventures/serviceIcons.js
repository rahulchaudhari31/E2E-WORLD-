import {
  CheckCircle2,
  ClipboardCheck,
  Code2,
  FileCheck,
  Globe,
  Lightbulb,
  Megaphone,
  Monitor,
  Network,
  Search,
  ShieldCheck,
  UserCheck,
  Users,
} from 'lucide-react';

const rules = [
  { pattern: /cyber|security|penetration|threat/i, icon: ShieldCheck },
  { pattern: /immigration|visa|sponsor|mobility|right-to-work/i, icon: Globe },
  { pattern: /marketing|seo|social|brand/i, icon: Megaphone },
  { pattern: /web|design|development/i, icon: Code2 },
  { pattern: /search|mapping|benchmarking/i, icon: Search },
  { pattern: /planning|compliance|audit/i, icon: ClipboardCheck },
  { pattern: /recruit|staffing|hiring|talent|headhunt/i, icon: Users },
  { pattern: /workforce|onboarding|hr|outsourcing/i, icon: UserCheck },
  { pattern: /it |consulting|managed|vendor|rpo|network/i, icon: Monitor },
  { pattern: /licence|policy|application/i, icon: FileCheck },
  { pattern: /advisory|strategy/i, icon: Lightbulb },
  { pattern: /management|solutions|services/i, icon: Network },
];

export const getServiceIcon = (service) => {
  const match = rules.find((rule) => rule.pattern.test(service));
  return match?.icon || CheckCircle2;
};

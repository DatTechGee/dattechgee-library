import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { PricingPlan } from "@/types";

// Pricing layout:
// 2 plans: grid-cols-1 md:grid-cols-2 max-w-2xl
// 3 plans: grid-cols-1 md:grid-cols-3 (middle one highlighted)
// 3+ plans: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
// center column often has highlighted={true}

export function PricingCard({
  plan,
  className,
}: {
  plan: PricingPlan;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col p-6 rounded-xl border bg-card text-card-foreground shadow transition-all duration-300",
        plan.highlighted
          ? "border-primary shadow-lg scale-[1.02] md:scale-105"
          : "hover:border-primary/40 hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      {plan.highlighted && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
          Most Popular
        </Badge>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold">{plan.price}</span>
          {plan.period && (
            <span className="text-sm text-muted-foreground">/{plan.period}</span>
          )}
        </div>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <Check className="size-4 mt-0.5 text-primary shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={plan.highlighted ? "default" : "outline"}
        className="w-full"
      >
        Get Started
      </Button>
    </div>
  );
}
# CPPay Brand Style Guide

## Brand Identity Overview

**CPPay** is a fintech/payment solution for Nigeria, designed with trust, security, and innovation at its core.

### Brand Promise:
- 💪 **Trustworthy**: Professional, secure, reliable
- 🚀 **Innovative**: Modern, forward-thinking, cutting-edge
- 🌍 **Accessible**: Inclusive, easy-to-use, democratic
- ⚡ **Fast**: Quick transactions, instant payments, seamless experience

---

## Color Psychology & Usage

### Navy Blue (#0b1932) - "The Anchor"
**Emotional Association**: Trust, security, stability, professionalism
**Usage**:
- Primary text (headings, body copy)
- Navigation elements
- Footer background
- Button secondary states
- Interactive hover states
- Deep shadows

**Why Navy**: Banking and fintech apps use navy for a reason—it signals trustworthiness and security. It's the color of your "backbone."

**When to Use**:
- Primary buttons on white backgrounds
- Navigation bars
- Headers and footers
- Text on light backgrounds
- Long-term trust signals

### Sky Blue (#0973b4) - "The Spark"
**Emotional Association**: Innovation, action, opportunity, growth
**Usage**:
- Primary call-to-action buttons
- Key accent words in headings
- Icon highlights
- Interactive highlights
- Feature callouts
- Forward momentum signals

**Why Sky Blue**: The bright blue sky suggests unlimited possibilities, innovation, and growth. It's optimistic and inviting while maintaining professionalism.

**When to Use**:
- Download buttons
- Sign-up CTAs
- Feature highlights
- Icon accents
- Links and interactive elements
- Progress indicators

---

## Visual Hierarchy System

```
LEVEL 1 - PRIMARY EMPHASIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Used for: Main CTAs, critical actions, hero headlines
Color: Sky Blue (#0973b4)
Example: "Download App" button, "Get Started" link
Weight: Bold, prominent, impossible to miss

LEVEL 2 - SECONDARY EMPHASIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Used for: Secondary actions, section titles, navigation
Color: Navy (#0b1932)
Example: Section headings, secondary buttons
Weight: Strong but not aggressive, supports hierarchy

LEVEL 3 - TERTIARY EMPHASIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Used for: Supporting text, metadata, borders
Color: Gray (#64748b or #1e293b)
Example: Descriptions, labels, secondary text
Weight: Subtle, supports primary/secondary elements

LEVEL 4 - BACKGROUND & STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Used for: Backgrounds, dividers, containers
Color: Light Gray (#f8fafc, #e2e8f0)
Example: Card backgrounds, borders, dividers
Weight: Invisible when working correctly
```

---

## Component Design System

### BUTTONS

#### Primary Button (Sky Blue)
**Purpose**: Main call-to-action, important user actions
```
Background:   #0973b4 (Sky Blue)
Hover:        #0582c0 (Darker Sky)
Active:       #0582c0 with shadow increase
Disabled:     #0973b4 with 50% opacity
Text:         White (#ffffff)
Shadow:       Box-shadow: 0 10px 25px rgba(9, 115, 180, 0.2)
Padding:      py-4 px-8 (Desktop), py-3 px-6 (Mobile)
Border-radius: 12px
Font:         Cara Pro, 600 weight, 16-18px
```

**States**:
- Idle: Sky blue with subtle shadow
- Hover: Darker sky, scale 105%, enhanced shadow
- Focus: Ring-2, cppay-sky-500 color
- Active: Darkest sky, maximum shadow
- Disabled: 50% opacity, cursor disabled

**Usage Examples**:
```
✅ "Download App Now"
✅ "Get Started"
✅ "Send Money"
✅ "Proceed to Payment"
❌ DON'T use for: Secondary actions, destructive actions
```

#### Secondary Button (Navy)
**Purpose**: Alternative actions, less critical decisions
```
Background:   #0b1932 (Navy)
Hover:        #060d1a (Darker Navy)
Active:       #060d1a with shadow
Disabled:     #0b1932 with 50% opacity
Text:         White (#ffffff)
Shadow:       Box-shadow: 0 10px 25px rgba(11, 25, 50, 0.2)
Padding:      py-4 px-8 (Desktop), py-3 px-6 (Mobile)
Border-radius: 12px
```

**Usage Examples**:
```
✅ "Learn More"
✅ "Back"
✅ "Cancel"
✅ "View Details"
```

#### Outline Button (Sky Blue Border)
**Purpose**: Tertiary actions, optional interactions
```
Background:   Transparent
Border:       2px solid #0973b4
Text:         #0973b4
Hover BG:     #0973b4/5 (light blue tint)
Hover Text:   #0582c0
Padding:      py-3 px-6
Border-radius: 12px
```

**Usage Examples**:
```
✅ "Explore Features"
✅ "View Pricing"
✅ "Skip for Now"
```

#### Ghost Button (Text only)
**Purpose**: Minimal, subtle actions
```
Background:   Transparent
Text:         #1e293b (Dark Gray)
Hover Text:   #0973b4 (Sky Blue)
Hover BG:     #f8fafc (off-white)
Padding:      py-2 px-4
Border-radius: 8px
Font-weight:  500
```

---

### NAVIGATION

#### Desktop Navigation
```
Link - Idle:     #64748b (Slate Gray)
Link - Hover:    #0973b4 (Sky Blue) with bottom border
Link - Active:   Navy background with sky text
Font:            Cara Pro, 500 weight, 14px
Padding:         px-3 py-2
Border-radius:   6px (on active)
Transition:      colors 200ms
```

#### Mobile Navigation
```
Background:   #0b1932 (Navy) with 95% opacity backdrop
Links:        White text, sky hover state
Dividers:     #1a2d52 (Light Navy)
Padding:      px-6 py-4 per item
Animation:    Slide in from left, 300ms
```

---

### CARDS & CONTAINERS

#### Feature Card
```
Background:   White (#ffffff)
Border:       1px solid #e2e8f0
Border Hover: #0973b4 (Sky Blue)
Shadow:       0 1px 3px rgba(0,0,0,0.1)
Hover Shadow: 0 10px 25px rgba(0,0,0,0.1)
Border-radius: 16px
Padding:      24px (Default), 32px (Large)
Transition:   all 300ms ease
Icon:         #0973b4 (Sky Blue)
```

#### Stats Card
```
Background:   #0b1932/5 (Navy tint, 5% opacity)
Border:       1px solid #e2e8f0
Number:       #0973b4 (Sky Blue), 36-48px, 700 weight
Label:        #1e293b (Dark Gray), 14px, 500 weight
Padding:      24px
Border-radius: 12px
```

#### Section Container
```
Background:   Transparent (shows blockchain background)
Inner Card:   White with 90% opacity
Max-width:    1280px (5xl)
Padding:      64px 32px (Desktop)
             40px 24px (Tablet)
             24px 16px (Mobile)
```

---

### HEADINGS & TEXT

#### H1 - Hero Title
```
Font:        Cara Pro, 900 weight
Color:       #0b1932 (Navy, main) + #0973b4 (Sky, accent)
Size:        48-64px (Desktop), 36-48px (Mobile)
Line-height: 1.2
Letter-spacing: -1px
Example:
"Send Money to Anyone in Nigeria" (Navy)
"Everyone in Nigeria." (Sky Blue accent)
```

#### H2 - Section Title
```
Font:        Cara Pro, 700-800 weight
Color:       #0b1932 (Navy)
Size:        32-48px (Desktop), 24-32px (Mobile)
Line-height: 1.3
Margin:      0 0 32px 0
```

#### H3 - Subsection Title
```
Font:        Cara Pro, 600-700 weight
Color:       #0b1932 (Navy)
Size:        20-24px
Line-height: 1.4
Margin:      0 0 16px 0
```

#### Body Text
```
Font:        Inter, 400-500 weight
Color:       #1e293b (Dark Gray)
Size:        16px (Desktop), 14px (Mobile)
Line-height: 1.6
Letter-spacing: 0.5px
```

#### Label / Small Text
```
Font:        Inter, 500 weight
Color:       #64748b (Slate Gray)
Size:        12-14px
Line-height: 1.5
```

---

## Color Combinations & Contrast

### Safe Combinations (WCAG AA+)

| Foreground | Background | Ratio | Status |
|----------|-----------|-------|---------|
| #0b1932 (Navy) | #ffffff (White) | 17.5:1 | ✅ Excellent |
| #0973b4 (Sky) | #ffffff (White) | 4.8:1 | ✅ WCAG AA |
| #0973b4 (Sky) | #0b1932 (Navy) | 5.2:1 | ✅ WCAG AA |
| #1e293b (Dark Gray) | #ffffff (White) | 13.5:1 | ✅ Excellent |
| #64748b (Slate Gray) | #ffffff (White) | 7.4:1 | ✅ WCAG AA |
| #ffffff (White) | #0b1932 (Navy) | 17.5:1 | ✅ Excellent |
| #ffffff (White) | #0973b4 (Sky) | 4.8:1 | ✅ WCAG AA |

### Combinations to AVOID

| Foreground | Background | Issue |
|----------|-----------|-------|
| #0973b4 (Sky) | #0b1932 (Navy) button text | Too subtle |
| #64748b (Slate) | #e2e8f0 (Light Gray) | Insufficient contrast |
| Light colors on Navy | Low contrast | Hard to read |

---

## Responsive Design Rules

### Typography Scaling
```
Desktop   Tablet    Mobile
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
H1: 64px  H1: 48px  H1: 36px
H2: 48px  H2: 36px  H2: 28px
H3: 32px  H3: 24px  H3: 20px
Body: 16px Body: 16px Body: 14px
```

### Button Sizing
```
Desktop:   py-4 px-8, text-lg
Tablet:    py-3 px-6, text-base
Mobile:    py-3 px-6, text-base (full-width)
```

### Spacing (Tailwind Scale)
```
Hero Section:    py-24 (Desktop), py-16 (Mobile)
Feature Cards:   gap-8 (Desktop), gap-6 (Tablet), gap-4 (Mobile)
Padding:         px-8 (Desktop), px-6 (Tablet), px-4 (Mobile)
```

---

## Animation Guidelines

### Button Interactions
```
Hover:    Scale 105%, shadow increase, color change
Active:   Scale 98%, shadow decrease
Focus:    Ring-2 (focus ring appears)
Disabled: No animation, 50% opacity
Duration: 200ms (fast, responsive)
Easing:   ease-in-out (smooth, natural)
```

### Micro-interactions
```
Link Hover:       Underline appears with color change
Card Hover:       Shadow increase, slight lift (transform translateY -2px)
Icon Hover:       Color shift (Navy ↔ Sky), slight scale
Feature Icon:     Fade in with 300ms stagger
```

### Page Transitions
```
Section Entry:    Fade in + slide up, 400ms
Card Entry:       Staggered fade in, 200ms each
Background:       Subtle orb movement, continuous
Scroll to Top:    Smooth scroll, 600ms
```

---

## Do's and Don'ts

### ✅ DO:
- ✅ Use Sky Blue for primary CTAs
- ✅ Use Navy for navigation and structure
- ✅ Use Gray for secondary text
- ✅ Maintain consistent button styles
- ✅ Test for accessibility before launch
- ✅ Scale proportionally on mobile
- ✅ Use shadows for depth hierarchy
- ✅ Keep hover states clear and visible
- ✅ Use color transitions (200-300ms)
- ✅ Pair colors for good contrast

### ❌ DON'T:
- ❌ Mix too many colors (only Navy, Sky, Gray)
- ❌ Use Navy and Sky text on each other (low contrast)
- ❌ Forget focus states for accessibility
- ❌ Change button colors arbitrarily
- ❌ Use pure black (use Navy instead)
- ❌ Use pure white without contrast consideration
- ❌ Animate everything (reserve for important elements)
- ❌ Use gradient text on complex backgrounds
- ❌ Forget about mobile responsiveness
- ❌ Skip WCAG contrast compliance

---

## Figma/Design Token Export

```json
{
  "colors": {
    "brand": {
      "navy": "#0b1932",
      "navyHover": "#060d1a",
      "sky": "#0973b4",
      "skyHover": "#0582c0",
      "skyLight": "#06a1d8"
    },
    "text": {
      "primary": "#1e293b",
      "secondary": "#64748b"
    },
    "ui": {
      "border": "#e2e8f0",
      "background": "#f8fafc"
    }
  },
  "shadows": {
    "sm": "0 1px 2px rgba(0,0,0,0.05)",
    "md": "0 4px 6px rgba(0,0,0,0.1)",
    "lg": "0 10px 15px rgba(0,0,0,0.1)",
    "sky": "0 10px 25px rgba(9,115,180,0.2)",
    "navy": "0 10px 25px rgba(11,25,50,0.2)"
  }
}
```

---

## Implementation Checklist

- [ ] All primary buttons use Sky Blue (#0973b4)
- [ ] All secondary buttons use Navy (#0b1932)
- [ ] All hover states are darker version of button color
- [ ] All focus states have visible ring
- [ ] All headings use Navy primary + Sky accents
- [ ] All body text uses Dark Gray (#1e293b)
- [ ] All borders use Light Gray (#e2e8f0)
- [ ] All icons use appropriate colors (Sky primary, Navy secondary)
- [ ] All shadows match brand colors
- [ ] Mobile spacing is adjusted appropriately
- [ ] Animations are smooth (200-300ms)
- [ ] Contrast ratios meet WCAG AA
- [ ] Color combinations tested for color-blind accessibility

---

**This is your professional brand identity. Use it consistently across all touchpoints.** 🎨✨

# Akwaaba Canteen

> Students and staff can view the canteen menu and place pickup orders so they can get meals more conveniently.

## The problem

Students and staff may have limited time between classes or other campus activities to choose and collect food. Without a clear way to check the menu and order ahead, they may need to queue or discover too late that an item is unavailable. Akwaaba Canteen is proposed to make menu information and order progress easier to access.

## Core features

1. **Browse the menu** - view available meals, descriptions, prices, and availability.
2. **Place a pickup order** - select items, review the order, and submit it for pickup.
3. **Track and manage orders** - customers can view order status; canteen staff can update item availability and move orders through their statuses.

### Later (out of scope for the first increment)

- Online payment integration
- SMS notifications
- Delivery
- Order history, ratings, and loyalty rewards

## External service and data

- **External service:** None required for the proposed first increment. Payment or SMS sandbox is to be selected if those integrations are approved later.
- **Data stored:** Menu items, prices, availability, customer/order details needed to fulfill an order, order items, and order status. Avoid storing payment credentials.
- **Payment approach:** To be agreed by the team; the initial prototype can record the selected payment method without processing payments.

## Team (roles rotate every 3 weeks)

| Name | GitHub | Role (weeks 1-3) |
|------|--------|------------------|
| TBD | TBD | Project manager |
| TBD | TBD | Lead developer |
| TBD | TBD | Tester |
| TBD | TBD | Documentation lead |

## Process model

**Iterative and incremental development** - deliver a small working feature set, gather feedback, and refine it in successive increments. See `docs/02-process-model/process-model.md` for the team's process-model justification.

## Documentation

| Folder | Contents |
|--------|----------|
| `docs/01-proposal` | Problem statement and member profiles |
| `docs/02-process-model` | Process-model justification |
| `docs/03-requirements` | Software requirements specification, feature requirements, and elicitation notes |
| `docs/04-uml` | UML diagrams |

These are the planned documentation locations; add the documents as the project develops.

## How to run

There is no runnable application in the repository yet. Add the setup and run instructions here when the first working increment and its technology stack are in place.

import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const ContactForm = pgTable("contactForm", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("createdAt").notNull().default("now()"),
  updatedAt: timestamp("updatedAt").notNull().default("now()"),
});

CREATE TABLE `user` (
	`id` integer PRIMARY KEY NOT NULL,
	`text_modifiers` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`email` text NOT NULL,
	`username` text,
	`first_name` text,
	`last_name` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);
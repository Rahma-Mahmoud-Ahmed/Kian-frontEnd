/**
 * Represents a message that will be shown as a notification message.
 */
 export class NotificationMessage {
  /**
   * The title of the notification.
   */
  public title?: string;

  /**
   * The messages to be shown, one per line.
   */
  public body!: string[];
}

import * as React from "react";

export interface SidebarContextProps {
  isInSidebar: boolean;
}
export interface SidebarProps {
  /** Modal content */
  children?: React.ReactNode;
  /** Determines if the Esc Key closes the modal */
  disableEscKey?: boolean;
  /** Set this prop to false to hide the translucent background when the dialog is open. */
  enableBackgroundUI?: boolean;
  /** Node that will be used as sidebar header. */
  header?: React.ReactNode;
  /** A custom close event handler */
  onCancel?: (ev: React.KeyboardEvent<HTMLElement>) => void;
  /** Sets the open state of the modal */
  open: boolean;
  /** Sets the position of sidebar, either left or right. */
  position?: "left" | "right";
  /** Sets the size of the sidebar when open. */
  size?:
    | "extra-small"
    | "small"
    | "medium-small"
    | "medium"
    | "medium-large"
    | "large"
    | "extra-large";
}

declare const SidebarContext: React.Context<SidebarContextProps>;

declare function Sidebar(
  props: SidebarProps & React.RefAttributes<HTMLDivElement>
): JSX.Element;

export { SidebarContext };
export default Sidebar;

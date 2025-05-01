export {}

declare global {
  interface Window {
    google: typeof google
  }

  namespace google {
    namespace accounts.id {
      interface CredentialResponse {
        credential: string
        select_by: string
        clientId: string
      }

      function initialize(config: {
        client_id: string
        callback: (response: CredentialResponse) => void
      }): void

      function renderButton(
        parent: HTMLElement,
        options: {
          theme: "outline" | "filled_blue" | "filled_black"
          size: "small" | "medium" | "large"
        }
      ): void
    }
  }
}

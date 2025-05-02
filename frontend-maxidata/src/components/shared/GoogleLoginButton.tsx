import { useEffect } from "react";

const ClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

if (!ClientId) {
  throw new Error("VITE_GOOGLE_CLIENT_ID undefined")
}
export function GoogleLoginButton() {
  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: ClientId,
        auto_select: true,
        callback: handleCredentialResponse,
      })

      window.google.accounts.id.renderButton(
        document.getElementById("google-button")!,
        {
          theme: "outline",
          size: "large",
        }
      )
    }
  }, [])

  const handleCredentialResponse = (
    response: google.accounts.id.CredentialResponse
  ) => {
    console.log("ID Token: ", response.credential)
    localStorage.setItem("auth_token", response.credential)
    window.location.href = "/home"
  }

  return <div id="google-button"></div>
}

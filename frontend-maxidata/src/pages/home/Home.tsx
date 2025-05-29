import { AppLayout } from "../../layouts/AppLayout"

export function Home() {
  return (
    <AppLayout>
      <div className="grid grid-cols-2 gap-4 dark:text-primary h-80">
        <div className="bg-whiteCard dark:bg-zinc-800 p-4 rounded shadow ">
          <p>eu</p>
        </div>
        <div className="bg-whiteCard dark:bg-gray-500 p-4 rounded shadow ">
          <p>eu2</p>
        </div>
      </div>
    </AppLayout>
  )
}

import { Link } from 'react-router-dom';
import {
  Popover,
  PopoverButton,
  PopoverPanel
} from '@headlessui/react'
import { ChevronDown, Menu } from 'lucide-react'
import {
  Moon,
  Sun,
  House,
  UserCheck,

} from 'lucide-react'
import { useTheme } from '../../hooks/globalStyle/theme/useTheme'

const solutions = [
  { name: 'Home', description: 'Analise seus profissionais', href: '/Home', icon: House },
  { name: 'Login', description: 'Sing-up or Sing-in', href: '/Login', icon: UserCheck }
]

export function MenuPopover() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900 dark:text-white">
        <Menu/>
        <ChevronDown className="size-5" />
      </PopoverButton>

      <PopoverPanel
        className="absolute left-1/2 z-20 mt-5 flex w-screen max-w-md -translate-x-1/2 px-4"
      >
        <div className="w-full rounded-3xl bg-white dark:bg-gray-900 text-sm shadow-lg ring-1 ring-gray-300 dark:ring-gray-700">
          <div className="p-4 space-y-2">
            {solutions.map((item) => (
              <Link
                to={item.href}
                key={item.name}
                className="group flex gap-4 items-start rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                  <item.icon className="size-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white block">
                    {item.name}
                  </span>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">{item.description}</p>
                </div>
              </Link>
            ))}

                <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3">
                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 w-full text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded transition"
                  >
                    {theme === 'dark' ? (
                      <>
                        <Sun className="size-4" />
                        Modo Claro
                      </>
                    ) : (
                      <>
                        <Moon className="size-4" />
                        Modo Escuro
                      </>
                    )}
                  </button>
                </div>
              </div>
        </div>
      </PopoverPanel>
    </Popover>
  )
}

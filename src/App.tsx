import { useState } from "react"

type Lang = "en" | "cz" | "ru" | "sk" | "uk" | "de" | "pl"

const translations: Record<
  Lang,
  {
    langLabel: string
    title: string
    effectiveDate: string
    intro: string
    allData: string
    appLabel: string
    items: string[]
    allInfo: string
    contact: string
  }
> = {
  en: {
    langLabel: "English",
    title: "Privacy Policy",
    effectiveDate: "Effective date:",
    intro:
      "This application does not collect, store, or transmit any personal data.",
    allData:
      "All data created or entered by the user is stored locally on the user's device only. The developer does not have access to this data.",
    appLabel: "The application:",
    items: [
      "Does not require user registration",
      "Does not use analytics services",
      "Does not use advertising services",
      "Does not collect personal information",
      "Does not share data with third parties",
    ],
    allInfo:
      "All information remains solely on the user's device and is not transmitted to any external servers.",
    contact: "If you have any questions, you can contact:",
  },
  cz: {
    langLabel: "Čeština",
    title: "Zásady ochrany osobních údajů",
    effectiveDate: "Datum účinnosti:",
    intro:
      "Tato aplikace neshromažďuje, neuchovává ani nepřenáší žádné osobní údaje.",
    allData:
      "Všechna data vytvořená nebo zadaná uživatelem jsou uložena pouze lokálně na zařízení uživatele. Vývojář nemá k těmto datům přístup.",
    appLabel: "Aplikace:",
    items: [
      "Nevyžaduje registraci uživatele",
      "Nepoužívá analytické služby",
      "Nepoužívá reklamní služby",
      "Neshromažďuje osobní informace",
      "Nesdílí data se třetími stranami",
    ],
    allInfo:
      "Veškeré informace zůstávají výhradně na zařízení uživatele a nejsou přenášeny na žádné externí servery.",
    contact: "Pokud máte jakékoli otázky, můžete kontaktovat:",
  },
  ru: {
    langLabel: "Русский",
    title: "Политика конфиденциальности",
    effectiveDate: "Дата вступления в силу:",
    intro:
      "Это приложение не собирает, не хранит и не передаёт никакие персональные данные.",
    allData:
      "Все данные, созданные или введённые пользователем, хранятся исключительно локально на устройстве пользователя. Разработчик не имеет доступа к этим данным.",
    appLabel: "Приложение:",
    items: [
      "Не требует регистрации пользователя",
      "Не использует аналитические сервисы",
      "Не использует рекламные сервисы",
      "Не собирает личную информацию",
      "Не передаёт данные третьим лицам",
    ],
    allInfo:
      "Вся информация остаётся исключительно на устройстве пользователя и не передаётся на внешние серверы.",
    contact: "Если у вас есть вопросы, вы можете связаться:",
  },
  sk: {
    langLabel: "Slovenčina",
    title: "Zásady ochrany osobných údajov",
    effectiveDate: "Dátum účinnosti:",
    intro:
      "Táto aplikácia nezhromažďuje, neukladá ani neprenáša žiadne osobné údaje.",
    allData:
      "Všetky dáta vytvorené alebo zadané používateľom sú uložené iba lokálne na zariadení používateľa. Vývojár nemá k týmto dátam prístup.",
    appLabel: "Aplikácia:",
    items: [
      "Nevyžaduje registráciu používateľa",
      "Nepoužíva analytické služby",
      "Nepoužíva reklamné služby",
      "Nezhromažďuje osobné informácie",
      "Nezdieľa dáta s tretími stranami",
    ],
    allInfo:
      "Všetky informácie zostávajú výhradne na zariadení používateľa a nie sú prenášané na žiadne externé servery.",
    contact: "Ak máte akékoľvek otázky, môžete kontaktovať:",
  },
  uk: {
    langLabel: "Українська",
    title: "Політика конфіденційності",
    effectiveDate: "Дата набрання чинності:",
    intro:
      "Цей застосунок не збирає, не зберігає та не передає жодних персональних даних.",
    allData:
      "Усі дані, створені або введені користувачем, зберігаються лише локально на пристрої користувача. Розробник не має доступу до цих даних.",
    appLabel: "Застосунок:",
    items: [
      "Не вимагає реєстрації користувача",
      "Не використовує аналітичні сервіси",
      "Не використовує рекламні сервіси",
      "Не збирає особисту інформацію",
      "Не передає дані третім особам",
    ],
    allInfo:
      "Уся інформація залишається виключно на пристрої користувача та не передається на жодні зовнішні сервери.",
    contact: "Якщо у вас є запитання, ви можете зв'язатися:",
  },
  de: {
    langLabel: "Deutsch",
    title: "Datenschutzerklärung",
    effectiveDate: "Datum des Inkrafttretens:",
    intro:
      "Diese Anwendung erfasst, speichert oder überträgt keine personenbezogenen Daten.",
    allData:
      "Alle vom Benutzer erstellten oder eingegebenen Daten werden ausschließlich lokal auf dem Gerät des Benutzers gespeichert. Der Entwickler hat keinen Zugriff auf diese Daten.",
    appLabel: "Die Anwendung:",
    items: [
      "Erfordert keine Benutzerregistrierung",
      "Verwendet keine Analysedienste",
      "Verwendet keine Werbedienste",
      "Erfasst keine persönlichen Informationen",
      "Gibt keine Daten an Dritte weiter",
    ],
    allInfo:
      "Alle Informationen verbleiben ausschließlich auf dem Gerät des Benutzers und werden nicht an externe Server übertragen.",
    contact: "Wenn Sie Fragen haben, können Sie kontaktieren:",
  },
  pl: {
    langLabel: "Polski",
    title: "Polityka prywatności",
    effectiveDate: "Data wejścia w życie:",
    intro:
      "Ta aplikacja nie zbiera, nie przechowuje ani nie przesyła żadnych danych osobowych.",
    allData:
      "Wszystkie dane utworzone lub wprowadzone przez użytkownika są przechowywane wyłącznie lokalnie na urządzeniu użytkownika. Deweloper nie ma dostępu do tych danych.",
    appLabel: "Aplikacja:",
    items: [
      "Nie wymaga rejestracji użytkownika",
      "Nie korzysta z usług analitycznych",
      "Nie korzysta z usług reklamowych",
      "Nie zbiera danych osobowych",
      "Nie udostępnia danych osobom trzecim",
    ],
    allInfo:
      "Wszystkie informacje pozostają wyłącznie na urządzeniu użytkownika i nie są przesyłane na żadne zewnętrzne serwery.",
    contact: "Jeśli masz jakiekolwiek pytania, możesz skontaktować się:",
  },
}

const langKeys: Lang[] = ["en", "cz", "ru", "sk", "uk", "de", "pl"]

function App() {
  const [lang, setLang] = useState<Lang>("en")
  const t = translations[lang]

  return (
    <div className="mx-4 my-4 px-4 py-4 rounded-lg bg-white max-w-2xl w-full shadow-md">
      <div className="my-4 flex md:flex-row sm:flex-col items-center justify-center">
        <div className="flex mx-4 my-4 flex-col sm:items-center md:items-start">
          <h1>{t.title}</h1>
          <p>
            <strong>{t.effectiveDate}</strong> 6.3.2026
          </p>
          <p>{t.intro}</p>
          <p>{t.allData}</p>
          <p>
            <strong>{t.appLabel}</strong>
          </p>
          <ul>
            {t.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p>{t.allInfo}</p>
          <p>{t.contact}</p>
          <p>
            Email:{" "}
            <a href="mailto:dmitriithoughtsdotgov@gmail.com">
              dmitriithoughtsdotgov@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-2">
        {langKeys.map((key) => (
          <button
            key={key}
            onClick={() => setLang(key)}
            className={`uppercase text-sm px-1 rounded transition-colors ${
              lang === key
                ? "font-bold text-black underline"
                : "text-gray-400 hover:text-gray-700"
            }`}
          >
            {key.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App

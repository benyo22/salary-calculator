> 🇬🇧 English version below

# 💸 Bérkalkulátor

Ez a projekt az **ELTE IK Kliensoldali webprogramozás** kurzusának első beadandó feladata. Az alkalmazás célja egy komplex bérkalkulátor megvalósítása React környezetben, amely képes kezelni a különböző magyar adókedvezményeket, és több családtag bérének együttes kezelését.

---

### 🎮 Funkciók
A projekt a megadott követelmények alapján az alábbi funkciókat valósítja meg:

* **Valós idejű kalkuláció:** A bruttó bér megadásakor (szöveges mező, csúszka, vagy +/- gombok segítségével) a nettó bér azonnal frissül.
* **Adókedvezmények kezelése:**
    * **25 év alattiak kedvezménye:** Automatikus SZJA mentesség számítása.
    * **Friss házasok kedvezménye:** Dátum alapú jogosultság-ellenőrzés (24 hónapon belüli házasságkötés).
    * **Családi adókedvezmény:** Eltartottak és kedvezményezett eltartottak számának kezelése egyedi komponenssel.
* **Háztartás menedzsment:**
    * Több családtag (személy) felvétele a listába.
    * Családtagok adatainak és bérének utólagos módosítása.
    * Családtagok törlése.
    * **Összesítő:** A teljes háztartás nettó jövedelmének megjelenítése.
* **Komponens alapú felépítés:** A kód logikusan elkülönített, újrahasznosítható komponensekre épül (pl. Input mezők, Kedvezmény kapcsolók).

---

### 🛠️ Felhasznált Technológiák
* **React:** A felhasználói felület és az állapotkezelés alapja.
* **Vite:** Gyors fejlesztői környezet és build tool.
* **CSS/SCSS:** Stílusozás és reszponzív megjelenés.

---

### 🚀 Telepítés és Futtatás

A projekt futtatásához szükséges a **Node.js** környezet.

1. **Klónozd a repót:**
    ```bash
   git clone https://github.com/benyo22/salary-calculator.git
   ```
2. **Függőségek telepítése:**
   ```bash
   npm install
   ```
3. **Fejlesztői szerver indítása:**
   ```bash
   npm run dev
   ```
Az alkalmazás ezután elérhető a terminálban megjelenő címen (általában http://localhost:5173).

## ⚠️ Jogi nyilatkozat

Ez a projekt oktatási célokat szolgál. Nem nyújt jogilag pontos, teljes vagy naprakész fizetési vagy adószámításokat.

---

## English Version

# 💸 Salary Calculator

This project is the first assignment of the **ELTE IK Client-Side Web Programming** course.  
The goal of the application is to implement a **comprehensive salary calculator** in a React environment, capable of handling various Hungarian tax benefits and managing the combined income of multiple family members.

---

### ✨ Features

Based on the given requirements, the project implements the following functionality:

- **Real-time calculation**  
  When entering the gross salary (via text input, slider, or +/- buttons), the net salary updates instantly.

- **Tax allowance handling**
  - **Under-25 tax benefit:** Automatic personal income tax (SZJA) exemption calculation.
  - **Newly married couples allowance:** Date-based eligibility check (marriage within the last 24 months).
  - **Family tax allowance:** Managing the number of dependents and eligible dependents via a dedicated component.

- **Household management**
  - Add multiple family members (persons) to a list.
  - Edit family members’ data and salary after creation.
  - Remove family members.
  - **Summary view:** Displays the total net household income.

- **Component-based architecture**  
  The code is structured into logically separated, reusable components (e.g. input fields, allowance toggles).

---

### 🛠️ Technologies Used

- **React** – UI rendering and state management  
- **Vite** – Fast development environment and build tool  
- **CSS / SCSS** – Styling and responsive layout

---

### 🚀 Installation & Running

Running the project requires a **Node.js** environment.

1. **Clone the repository:**
    ```bash
    git clone https://github.com/benyo22/salary-calculator.git
    ```
2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Run the dev server:**
    ```bash
    npm run dev
    ```

The application will then be available at the address shown in the terminal (typically http://localhost:5173).

## ⚠️ Disclaimer

This project was created for educational purposes. It does not provide legally accurate, complete, or up-to-date salary or tax calculations.

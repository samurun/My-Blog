# สร้าง React App ด้วย Vite

ในการสร้างแอปพลิเคชัน React ใหม่โดยใช้ Vite ให้ทำตามขั้นตอนเหล่านี้:

## ขั้นตอนที่ 1: ติดตั้ง Vite

คุณสามารถสร้างโปรเจกต์ Vite ใหม่โดยใช้ npm หรือ yarn เปิดเทอร์มินัลของคุณและรันคำสั่ง:

```bash
npm create vite@latest my-react-app -- --template react
```

หรือ

```bash
yarn create vite my-react-app --template react
```

## ขั้นตอนที่ 2: เปลี่ยนไปยังโปรเจกต์ของคุณ

เปลี่ยนไปยังไดเรกทอรีโปรเจกต์ของคุณ:

```bash
cd my-react-app
```

## ขั้นตอนที่ 3: ติดตั้ง Dependencies

ติดตั้ง dependencies ที่จำเป็น:

```bash
npm install
```

หรือ

```bash
yarn
```

## ขั้นตอนที่ 4: เริ่มเซิร์ฟเวอร์พัฒนา

รันเซิร์ฟเวอร์พัฒนา:

```bash
npm run dev
```

หรือ

```bash
yarn dev
```

แอป React ของคุณควรทำงานที่ `http://localhost:5173` แล้ว

## ข้อมูลเพิ่มเติม

สำหรับรายละเอียดเพิ่มเติม โปรดตรวจสอบ [เอกสาร Vite](https://vitejs.dev/guide/).

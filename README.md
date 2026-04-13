

# 💎 Mira Gastos- Control de Gastos Diarios
es una aplicación web minimalista diseñada para gestionar finanzas personales con un enfoque en la claridad visual y la calma. Utiliza un diseño basado en *Glassmorphism* para ofrecer una experiencia de usuario fluida, permitiendo registrar gastos y visualizar metas de ahorro sin la saturación de las apps financieras tradicionales.


---

## ✨ Características Principales

* **Registro en Segundos:** Interfaz optimizada para anotar consumos diarios de forma rápida.
* **Resumen Visual Limpio:** Uso de bloques transparentes y tipografía legible para detectar fugas de dinero.
* **Seguimiento de Metas:** Indicadores porcentuales para control de presupuestos semanales.
* **Diseño Sereno:** Estética moderna que reduce la ansiedad al revisar estados financieros.
* **Arquitectura Escalable:** Estructura de carpetas organizada por características (`features`) para facilitar el mantenimiento.

## 🚀 Stack Tecnológico

* **Frontend:** React.js con React Router para la navegación.
* **Estilos:** Bootstrap 5.3 + Custom CSS (Glassmorphism).
* **Iconos:** Bootstrap Icons.
* **Backend (En desarrollo):** Preparado para conexión con Node.js, Express y MongoDB Atlas.

## 📂 Estructura del Proyecto

El proyecto sigue una estructura modular basada en funcionalidades:

```text
src/
 ├── assets/          # Recursos estáticos
 ├── features/        # Módulos principales
 │    ├── api/        # Consumo de servicios externos
 │    ├── auth/       # Registro, Login y recuperación
 │    ├── dashboard/  # Panel de control privado
 │    └── layout/     # Componentes de estructura (Navbar, Content)
 └── App.js           # Enrutador principal
```

## 🛠️ Instalación y Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/daily-glass.git
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo:**
   ```bash
   npm start
   ```

## 📈 Próximos Pasos

- [ ] Implementar autenticación real con JWT.
- [ ] Conexión a base de datos NoSQL (MongoDB Atlas) para persistencia de datos por usuario.
- [ ] Gráficos interactivos de gastos mensuales.

---
**Desarrollado por:** [Juan José Mira]  
*Estudiante de Análisis y Desarrollo de Software - SENA* 🚀
# Duraclim UI Kit

A modern, customizable React component library built with TypeScript and SCSS modules.

## 🚀 Installation

```bash
npm install duraclim-ui-kit
```

### Local Development
```bash
git clone https://github.com/younes-dro/duraclim-ui-kit.git
cd duraclim-ui-kit
npm install
npm run dev
```

## 📦 Components
### 🔘 Buttons
Various button styles for different actions:

- primary : Main call-to-action buttons
- success : Confirmation actions
- cancel : Destructive actions
- ghost : Secondary actions
- dropdown : Button with dropdown menu
- dropdownGhost : Secondary button with dropdown
- deactivate : Disabled state buttons

```tsx
<Button
  variant="primary"
  icon="✨"
  text="New"
  dropdownOptions={[
    { label: 'Option 1', onClick: () => {} },
    { label: 'Option 2', onClick: () => {} }
  ]} // Optional
/>
```

### 👤 Avatar
User avatar component with multiple sizes:

```tsx
<Avatar size="sm|md|lg" />
```

### 🎴 Cards
Two types of cards available:

**Standard Card**
```tsx
<Card
  mode="add|select"
  title="Card Title"
  image="/path/to/image"
  price={200}
  isAdded={false}
  itemsCount={0}
  onSelect={() => {}}
  onEdit={() => {}}
/>
```

**Service Card**
```tsx
<CardService
  image="/path/to/image"
  label="medium|high|low"
  title="Service Title"
  price={299.99}
  quantity={1}
  traps={0}
  onQuantityChange={() => {}}
  onTrapsChange={() => {}}
  onDelete={() => {}}
/>
```

### 📝 Inputs
Various input types with validation:

```tsx
<Input
  type="text|email|tel|search|url|date"
  placeholder="Enter value"
  icon="🔍"
  value={value}
  onChange={(value, isValid) => {}}
  options={[]} // For select type
/>
```

## 📐 Layout Components
### 📦 Container
Content wrapper with predefined widths:

```tsx
<Container 
  maxWidth="narrow|default|wide" 
  padding={true|false}
>
  {children}
</Container>
```

### 🔝 Navbar
Top navigation bar:

```tsx
<Navbar
  logo={<img src="/logo.png" alt="Logo" />}
  right={<div>Right content</div>}
/>
```

### 📑 Sidebar
Customizable sidebar:

```tsx
<Sidebar
  position="right|left"
  maxWidth="280px"
>
  {children}
</Sidebar>
```

### 📄 PageLayout
Main layout component:

```tsx
<PageLayout
  navbar={<Navbar />}
  sidebar={<Sidebar />}
>
  {mainContent}
</PageLayout>
```

## 🎨 Styling
- SCSS Modules for component-specific styling
- Modern design principles
- CSS variables for customization
- Responsive design support

## 🛠️ Component Properties

### Button Props
```ts
interface ButtonProps {
  variant: 'primary' | 'success' | 'cancel' | 'ghost' | 'dropdown' | 'dropdownGhost' | 'deactivate';
  icon?: string;
  text: string;
  dropdownOptions?: Array<{ label: string; onClick: () => void }>;
}
```

### Avatar Props
```ts
interface AvatarProps {
  size: 'sm' | 'md' | 'lg';
}
```

### Card Props
```ts
interface CardProps {
  mode: 'add' | 'select';
  title: string;
  image: string;
  price?: number;
  isAdded?: boolean;
  itemsCount?: number;
  onSelect: () => void;
  onEdit?: () => void;
}
```

### Input Props
```ts
interface InputProps {
  type: 'text' | 'email' | 'tel' | 'search' | 'url' | 'date';
  placeholder: string;
  icon?: string;
  value: string;
  onChange: (value: string, isValid: boolean) => void;
  options?: string[]; 
}
```

## 📱 Responsive Design
The UI Kit is built with a mobile-first approach and supports various screen sizes:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Development
### Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run test     # Run tests
npm run lint     # Run linting
```



## 📄 License
MIT © Duraclim

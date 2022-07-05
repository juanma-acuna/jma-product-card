# JMA-Product-Card

Este es un paquete de pruebas de despliegue en NPM.

### Juan Manuel Acuña.

## Ejemplo de uso

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from jma-product-card;
```

```
<ProductCard
  product={product}
  initialValues={{
    count: 0,
    // maxCount: 10,
  }}
>
  {({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```

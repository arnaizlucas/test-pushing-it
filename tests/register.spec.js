const { test, expect } = require('@playwright/test');

test('Registro exitoso', async ({ page }) => {
  // Ir a la página de registro
  await page.goto('https://pushing-it.vercel.app/');

  // Generar un nombre único
  const uniqueName = `User${Date.now()}`;

  // Completar el formulario ** PODRIA HABERSE USADO PARA CREAR EL USUARIO ALEX 3 PERO SOLO PODRIA EJECUTARSE UNA VEZ. 
  await page.locator('input[name="user"]').fill(uniqueName);
  await page.locator('input[name="pass"]').fill('123456&');

  // Seleccionar el género
  await page.locator('[data-cy="Other"]').click();

  // Hacer clic en el botón de registro
  await page.locator('#submitForm').click();

  // Esperar a que la URL cambie después del registro exitoso
  await page.waitForURL('https://pushing-it.vercel.app/home');

  // Verificar que estamos en la página correcta
  await expect(page).toHaveURL('https://pushing-it.vercel.app/home');

  // Esperar a que aparezca el mensaje de bienvenida y validarlo
  const welcomeMessage = page.locator('.chakra-heading.css-y5314g');
  await expect(welcomeMessage).toContainText('Welcome');
});


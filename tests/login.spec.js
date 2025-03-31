const { test, expect } = require('@playwright/test');

test('Login exitoso', async ({ page }) => {
  // Ir a la página de login
  await page.goto('https://pushing-it.vercel.app/');

   // Hacer doble clic en el elemento con el selector "registertoggle"
   await page.locator('#registertoggle').dblclick();
   await page.waitForTimeout(500);


 // Completar los campos de usuario y contraseña. ** ESTE USUARIO DEBE SER CREADO PREVIAMENTE A LA EJECUCION DEL TEST **
 // En este caso no se planteo un archivo con variables globales o locators globales para la practicidad del desafio ya que pedia al menos 1 test. 
  await page.fill('input[name="user"]', 'Alex3');
  await page.fill('input[name="pass"]', '123456&');

  // Hacer clic en el botón de login
  await page.click('button[type="submit"]');
  await page.waitForTimeout(5000);


  // Esperar a que la URL cambie después del login exitoso
  await page.waitForURL('https://pushing-it.vercel.app/home');
     await page.waitForTimeout(500);


  // Verificar que estamos en la pagina correcta
  await expect(page).toHaveURL('https://pushing-it.vercel.app/home');

  // Verificar que el usuario vea un mensaje de bienvenida
  await expect(page.locator('.chakra-heading.css-y5314g')).toContainText('Welcome');

});
 

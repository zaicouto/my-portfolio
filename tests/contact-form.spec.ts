import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("textbox", { name: "Nome" }).click();
  await page.getByRole("textbox", { name: "Nome" }).fill("Ozair");
  await page.getByRole("textbox", { name: "Nome" }).press("Tab");
  await page
    .getByRole("textbox", { name: "Email" })
    .fill("marloncouto719@gmail.com");
  await page.getByRole("textbox", { name: "Mensagem" }).click();
  await page.getByRole("textbox", { name: "Mensagem" }).fill("Teste");
  await page.getByRole("button", { name: "Enviar Mensagem" }).click();
});

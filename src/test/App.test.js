import { render, screen } from "@testing-library/react";
import FormTest from "../views/FormTest";

test("formが存在することを確認", () => {
  render(<FormTest />);
  //formに emailとpasswordのinputがあるか確認
  const emailInput = screen.getByLabelText("Email"); //labelのfor属性とinputのid属性が一致しているか確認
  const passwordInput = screen.getByLabelText("Password");
  const submitButton = screen.getByRole("button", { name: /submit/i });
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

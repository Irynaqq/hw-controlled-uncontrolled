import { useState } from "react";

function ControlledForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    isSubscribed: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Відправлено (Controlled): 
Ім'я: ${formData.name}
Email: ${formData.email}
Підписка: ${formData.isSubscribed ? "так" : "ні"}`
    );
  };

  return (
    <section>
      <h2>ControlledForm (контрольована форма)</h2>
      <p>Усі значення форми зберігаються у state компонента.</p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "12px" }}>
          <label>
            Ім&apos;я:{" "}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Введіть ім'я"
            />
          </label>
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label>
            Email:{" "}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@mail.com"
            />
          </label>
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label>
            <input
              type="checkbox"
              name="isSubscribed"
              checked={formData.isSubscribed}
              onChange={handleChange}
            />{" "}
            Підписатися на новини
          </label>
        </div>

        <button type="submit">Відправити</button>
      </form>
    </section>
  );
}

export default ControlledForm;

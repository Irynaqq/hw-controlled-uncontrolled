import { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef(null);
  const commentRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = nameRef.current?.value || "";
    const comment = commentRef.current?.value || "";

    alert(
      `Відправлено (Uncontrolled): 
Ім'я: ${name}
Коментар: ${comment}`
    );

    nameRef.current.value = "";
    commentRef.current.value = "";
  };

  return (
    <section>
      <h2>UncontrolledForm (неконтрольована форма)</h2>
      <p>
        Значення не зберігаються у state. Ми звертаємося до полів напряму через
        <code> ref </code>.
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "12px" }}>
          <label>
            Ім&apos;я:{" "}
            <input type="text" ref={nameRef} placeholder="Введіть ім'я" />
          </label>
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label>
            Коментар:
            <br />
            <textarea
              ref={commentRef}
              rows={3}
              placeholder="Напишіть будь-що..."
            />
          </label>
        </div>

        <button type="submit">Відправити</button>
      </form>
    </section>
  );
}

export default UncontrolledForm;

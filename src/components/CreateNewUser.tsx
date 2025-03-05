import { Button, Card, TextInput, Title } from "@tremor/react";

export function CreateNewUser() {
  return (
    <Card style={{ marginTop: "16px" }}>
      <Title>Create New User</Title>
      <form>
        <TextInput placeholder="Aquí el nombre" />
        <TextInput placeholder="Aquí el mail" />
        <TextInput placeholder="Aquí el usuario de GitHub" />

        <div>
          <Button type="submit" style={{ marginTop: "16px" }}>
            Crear Usuario
          </Button>
        </div>
      </form>
    </Card>
  );
}

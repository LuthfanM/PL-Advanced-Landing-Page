"use client"
import Container from "@/components/Container";
import MainContent from "@/contents/MainContent";
import { FormDataProvider } from "@/providers/FormDataProvider";

export default function Home() {
  return (
    <FormDataProvider>
      <Container id="home">
        <MainContent />
      </Container>
    </FormDataProvider>
  );
}

import Container from "@/components/layouts/container";
import SideNav from "@/components/layouts/side-nav";
import TopNav from "@/components/layouts/top-nav";
import Header from "@/components/layouts/chat-header";
import MessageLayout from "@/components/layouts/message-layout";
import ChatForm from "@/components/layouts/chat-form";

const Home = () => {
  return (
    <Container className="flex">
      <SideNav />
      <TopNav />
      <Container className="mt-12 h-screen w-full bg-background md:ml-72 md:mt-auto">
        <Header />
        <MessageLayout />
        <ChatForm />
      </Container>
    </Container>
  );
};

export default Home;

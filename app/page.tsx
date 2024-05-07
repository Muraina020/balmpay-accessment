import BilmaPay from "@/components/BilmaPay";
import Customers from "@/components/Customers";
import Download from "@/components/Download";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Partner from "@/components/Partner";
import Questions from "@/components/Questions";
import Showcase from "@/components/Showcase";

export default function Home() {
  return (
      <>
      <Header/>
      <Partner/>
      <Features/>
      <Showcase/>
      <Download />
      <Customers/>
      <Questions/>
      <BilmaPay />
      </>
  );
}

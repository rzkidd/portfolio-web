import { Footer } from "flowbite-react";
import { DateTime } from "luxon";

export default function FooterComponent() {
  return (
    <Footer container className="bg-background">
      <Footer.Copyright
        href="#"
        by="Reza Akbar Saputra"
        year={DateTime.now().toFormat("yyyy")}
        className="text-lg text-textMuted"
      />
    </Footer>
  );
}

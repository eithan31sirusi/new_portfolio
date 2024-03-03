import { TikTokEmbed } from "react-social-media-embed";

import "./Iframe.css";

const Iframe = () => {
  return (
    <section id="iframe">
      <h2 style={{ marginBottom: "unset", textAlign: "center" }}>Creativty</h2>
      <h4 style={{ marginBottom: "2rem", textAlign: "center" }}>
        Drawings & Videos
      </h4>
      <div className="iframe-container">
        <TikTokEmbed
          url="https://www.tiktok.com/@eitan.sirusi/video/7331121665335758098"
          width={325}
        />
        <TikTokEmbed
          url="https://www.tiktok.com/@eitan.sirusi/video/7331667571437014279?is_from_webapp=1&sender_device=pc&web_id=7228538161462773250"
          width={325}
        />
        <TikTokEmbed
          url="https://www.tiktok.com/@eitan.sirusi/video/7330160602956008722?is_from_webapp=1&sender_device=pc&web_id=7228538161462773250"
          width={325}
        />
        <TikTokEmbed
          url="https://www.tiktok.com/@eitan.sirusi/video/7324777413408197906?is_from_webapp=1&sender_device=pc&web_id=7228538161462773250"
          width={325}
        />
        <TikTokEmbed
          url="https://www.tiktok.com/@eitan.sirusi/video/7321467716240444680?is_from_webapp=1&sender_device=pc&web_id=7228538161462773250"
          width={325}
        />
        <TikTokEmbed
          url="https://www.tiktok.com/@eitan.sirusi/video/7315833987136523527?is_from_webapp=1&sender_device=pc&web_id=7228538161462773250"
          width={325}
        />
        <TikTokEmbed
          url="https://www.tiktok.com/@eitan.sirusi/video/7310932944783199496?is_from_webapp=1&sender_device=pc&web_id=7228538161462773250"
          width={325}
        />
        <TikTokEmbed
          url="https://www.tiktok.com/@eitan.sirusi/video/7310206786114653448?is_from_webapp=1&sender_device=pc&web_id=7228538161462773250"
          width={325}
        />
      </div>
    </section>
  );
};

export default Iframe;

import "../App.css";
import { Avatar, Tabs, Text } from "@mantine/core";

const Mantine = () => {
  return (
    <div>
      <Tabs color="violet" defaultValue="gallery">
        <Tabs.List>
          <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
          <Tabs.Tab value="messages">Messages</Tabs.Tab>
          <Tabs.Tab value="settings">Settings</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>
        <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>
        <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
      </Tabs>
      <div style={{ display: "flex" }}>
        <Avatar radius="xl" />
        <Text
          size="xl"
          fw={900}
          variant="gradient"
          gradient={{ from: "blue", to: "violet", deg: 90 }}
        >
          Moonie
        </Text>
      </div>
    </div>
  );
};

export default Mantine;

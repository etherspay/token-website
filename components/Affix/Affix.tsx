import { Affix, Button, Notification, Transition, rem } from "@mantine/core";
import React, { useState } from "react";

export default function AffixComponent() {
  const [visible, setVisible] = useState(true);
  return (
    <Affix position={{ bottom: rem(20), right: rem(20) }} hidden={!visible}>
      <Notification
        color="orange"
        title="Etherspay is still in development 🔨"
        onClose={() => setVisible(false)}
      />
    </Affix>
  );
}

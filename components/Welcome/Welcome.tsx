import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Hi, I'm {' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Leonardo
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        contact me on Instagram{' '}
        <Anchor href="https://mantine.dev/guides/next/" size="lg">
          @leovurchio
        </Anchor>
        <br></br>See you soon!
      </Text>
    </>
  );
}

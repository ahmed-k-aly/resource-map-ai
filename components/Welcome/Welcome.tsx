import { Title, Text } from '@mantine/core';
import classes from './Welcome.module.css';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

export function Welcome() {
  return (
    <div style={
      {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        padding: '0 20px',
        margin: '0',
      }
    }
    >
    <div style={
      {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        height: '0%',
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: 100,
        padding: '0 20px',
        boxSizing: 'border-box',
        marginTop: '15px',
      }}
    >
    <ColorSchemeToggle />

    </div>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          MapGPT
        </Text>
      </Title>
      <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This project serves to create resource maps based on a prompt {' '}
      </Text>
      <form style={
      {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
        width: '100%',
        position: 'absolute',
        bottom: '0',
        left: '0',
        zIndex: 100,
        padding: '0 20px',
        boxSizing: 'border-box',
      }}
      >
         <input type="text" name="prompt" />
      </form>
    </div>
  );
}

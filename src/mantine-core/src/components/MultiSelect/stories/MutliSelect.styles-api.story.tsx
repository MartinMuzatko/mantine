import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider } from '@mantine/styles';
import { generateBorderStyles, InputStylesApiWrapper } from '@mantine/ds/src';
import { MultiSelect, MultiSelectProps } from '../MultiSelect';
import { MultiSelect as MultiSelectStylesApi } from '../styles.api';

const styles = generateBorderStyles(MultiSelectStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<MultiSelectProps>) {
  return (
    <InputStylesApiWrapper
      component={MultiSelect}
      value={['React', 'Angular']}
      data={['React', 'Angular', 'Vue', 'Svelte']}
      rightSection={null}
      {...props}
    />
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/MultiSelect/styles-api', module)
  .add('With sx', () => (
    <Wrapper sx={{ border: '1px solid red', maxWidth: 400 }} mx="auto" mt="xl" />
  ))
  .add('Root styles object', () => <Wrapper styles={{ root: { border: '1px solid blue' } }} />)
  .add('Root styles function', () => (
    <Wrapper styles={() => ({ root: { border: '1px solid blue' } })} />
  ))
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ MultiSelect: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));

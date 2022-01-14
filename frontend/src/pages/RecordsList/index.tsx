import { PageHeading, Table } from '../../components';
import { Container } from './styled';

export const RecordsList = () => {
  return (
    <Container>
      <PageHeading>Records List</PageHeading>
      <Table<{ id: number; name: string }>
        data={[]}
        properties={[{ key: 'name', title: 'Name' }]}
      />
    </Container>
  );
};

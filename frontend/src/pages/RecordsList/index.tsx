import { PageHeading, Table } from '../../components';
import { Container } from './styled';

export const RecordsList = () => {
  return (
    <Container>
      <PageHeading>Highscore List</PageHeading>
      <Table<{
        id: number;
        name: string;
        record: string;
        rank: number;
      }>
        className="table"
        data={[
          {
            id: 1,
            name: 'Morteza Shojaei',
            rank: 1,
            record: '2:35',
          },
          {
            id: 2,
            name: 'Reza Jodaki',
            rank: 2,
            record: '2:50',
          },
          {
            id: 3,
            name: 'Mohammad Ahmadi',
            rank: 3,
            record: '3:30',
          },
          {
            id: 4,
            name: 'Ali Azizi',
            rank: 4,
            record: '2:35',
          },
          {
            id: 4,
            name: 'Ali Azizi',
            rank: 4,
            record: '2:35',
          },
          {
            id: 5,
            name: 'Ali Azizi',
            rank: 5,
            record: '2:35',
          },
          {
            id: 6,
            name: 'Ali Azizi',
            rank: 6,
            record: '2:35',
          },
          {
            id: 7,
            name: 'Ali Azizi',
            rank: 7,
            record: '2:35',
          },
          {
            id: 8,
            name: 'Ali Azizi',
            rank: 8,
            record: '2:35',
          },
          {
            id: 9,
            name: 'Ali Azizi',
            rank: 9,
            record: '2:35',
          },
        ]}
        properties={[
          { key: 'id', title: 'ID' },
          { key: 'rank', title: 'Rank' },
          { key: 'name', title: 'Name' },
          { key: 'record', title: 'Record' },
        ]}
      />
    </Container>
  );
};

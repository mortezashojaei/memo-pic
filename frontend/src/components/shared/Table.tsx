import styled from 'styled-components';

type Props<DataType> = {
  className?: string;
  data: DataType[];
  properties: {
    key: Extract<keyof DataType, string>;
    title: string;
  }[];
};

export function Table<DataType extends { id: number }>({
  data,
  className = '',
  properties,
}: Props<DataType>) {
  return (
    <TableContainer className={className}>
      <thead>
        <tr>
          {properties.map((property) => (
            <th key={String(property.key)}>{property.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {properties.map((property) => (
              <td key={String(property.key)}>{item[property.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
}

const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-size: 2rem;
  text-align: left;

  td {
    border: 1px solid #ddd;
    padding: 3rem;
  }

  tr:nth-child(even) {
    background-color: #f4f4f4;
  }

  tr:nth-child(odd) {
    background-color: #ddddddd8;
  }

  th {
    background-color: #00b894;
    color: white;
    border: 1px solid #ddd;
    padding: 1.6rem 3rem;
    font-weight: 700;
  }
`;

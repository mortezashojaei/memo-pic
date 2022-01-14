import styled from 'styled-components';

type Props<DataType> = {
  data: DataType[];
  properties: {
    key: Extract<keyof DataType, string>;
    title: string;
  }[];
};

export function Table<DataType extends { id: number }>({
  data,
  properties,
}: Props<DataType>) {
  return (
    <TableContainer>
      <tr>
        {properties.map((property) => (
          <th key={String(property.key)}>{property.title}</th>
        ))}
      </tr>
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

const TableContainer = styled.table``;

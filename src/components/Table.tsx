import React from "react";

// 이 컴포넌트 사용자에게 요구할, 요구사항. 의존성 주입해주세요!
type TableProps<T> = React.ComponentProps<"table"> & {
  headList: string[];
  headRatio?: string[];
  dataList: T[];
  getKey: (data: T) => string | number;
  Row: React.FC<{ data: T }>;
  zebra: "purple" | "yellow";
};

function Table<T>({
  headList,
  headRatio,
  dataList,
  getKey,
  Row,
  className,
  zebra,
  ...props
}: TableProps<T>) {
  return (
    <table
      className={`table table-${zebra}-zebra w-full ` + className}
      {...props}
    >
      <thead>
        <tr className="text-center">
          {headList.map((head, i) => (
            <th key={head} className={`${headRatio ? headRatio[i] : ""}`}>
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataList.map((data) => (
          <Row key={getKey(data)} data={data} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;

import React from 'react';

function TableSkeleton() {
  return (
    <div className="overflow-x-auto">
      <table className=" table-zebra table-bordered table-hover table-skeleton">
        <thead>
          <tr>
            <th className="table-th"></th>
            <th className="table-th"></th>
            <th className="table-th"></th>
          </tr>
        </thead>
        <tbody>
          {/* Table row with skeleton effect */}
          <tr className="animate-pulse bg-slate-400">
            <td className="table-td h-12"></td>
            <td className="table-td h-12"></td>
            <td className="table-td h-12"></td>
          </tr>
          {/* Repeat this row as many times as needed to fill the table */}
        </tbody>
      </table>
    </div>
  );
}

export default TableSkeleton;

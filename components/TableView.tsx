
import React from 'react';
import type { AppTable } from '../types';

interface TableViewProps {
  table: AppTable;
}

export const TableView: React.FC<TableViewProps> = ({ table }) => {
  return (
    <div>
      <header className="mb-8">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-white dark:bg-secondary rounded-lg shadow-md">
            <table.icon className="h-10 w-10 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-foreground">{table.name}</h1>
            <p className="text-gray-500 dark:text-muted-foreground mt-1">{table.description}</p>
          </div>
        </div>
      </header>

      <div className="bg-white dark:bg-secondary rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-border">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-foreground">Columns</h2>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-foreground" aria-label={`Columns for ${table.name}`}>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-secondary dark:text-foreground">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Column Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Data Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {table.columns.map((column) => (
                        <tr key={column.id} className="bg-white even:bg-gray-50 border-b dark:bg-background dark:even:bg-muted dark:border-border hover:bg-gray-100 dark:hover:bg-secondary/50">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-foreground">
                                {column.name}
                            </th>
                            <td className="px-6 py-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-primary/20 dark:text-primary-foreground`}>
                                  {column.type}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                {column.description}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

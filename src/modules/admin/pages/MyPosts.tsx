import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import { PostFilters } from '../../blog/pages/home/PostFilters';

const MyPosts = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl text-primary-dark font-semibold">My Posts</h1>
      <div className="mt-8"></div>
      <PostFilters />
      <div className="mt-8"></div>
      <Table color="primary" aria-label="Example static collection table">
        <TableHeader className="bg-white text-primary-dark">
          <TableColumn className="text-primary-dark bg-white">
            Title
          </TableColumn>
          <TableColumn className="text-primary-dark bg-white">
            Likes
          </TableColumn>
          <TableColumn className="text-primary-dark bg-white">
            Comments
          </TableColumn>
          <TableColumn className="text-primary-dark bg-white">
            Category
          </TableColumn>
          <TableColumn className="text-primary-dark bg-white">
            Technology
          </TableColumn>
          <TableColumn className="text-primary-dark bg-white">
            Sections posts
          </TableColumn>
          <TableColumn className="text-primary-dark bg-white">
            Created
          </TableColumn>
          <TableColumn className="text-primary-dark bg-white">
            Modified
          </TableColumn>
          <TableColumn className="text-primary-dark bg-white">
            Status
          </TableColumn>
          <TableColumn className="text-primary-dark bg-white">
            Actions
          </TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Tony Reichert</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Pagination total={10} initialPage={1} />
    </div>
  );
};

export default MyPosts;

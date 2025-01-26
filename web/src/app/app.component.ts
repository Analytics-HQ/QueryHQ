import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';
import { EditorComponent } from 'ngx-monaco-editor-v2';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    FormsModule,
    AngularSplitModule,
    EditorComponent,
    NgxDatatableModule,
    FontAwesomeModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  protected readonly faPlay = faPlay;

  private editorInstance: any;

  code: string = `CREATE TABLE dbo.EmployeePhoto
(
    EmployeeId INT NOT NULL PRIMARY KEY,
    Photo VARBINARY(MAX) FILESTREAM NULL,
    MyRowGuidColumn UNIQUEIDENTIFIER NOT NULL ROWGUIDCOL
                    UNIQUE DEFAULT NEWID()
);

GO

/*
text_of_comment
/* nested comment */
*/

-- line comment

CREATE NONCLUSTERED INDEX IX_WorkOrder_ProductID
    ON Production.WorkOrder(ProductID)
    WITH (FILLFACTOR = 80,
        PAD_INDEX = ON,
        DROP_EXISTING = ON);
GO

WHILE (SELECT AVG(ListPrice) FROM Production.Product) < $300
BEGIN
   UPDATE Production.Product
      SET ListPrice = ListPrice * 2
   SELECT MAX(ListPrice) FROM Production.Product
   IF (SELECT MAX(ListPrice) FROM Production.Product) > $500
      BREAK
   ELSE
      CONTINUE
END
PRINT 'Too much for the market to bear';

MERGE INTO Sales.SalesReason AS [Target]
USING (VALUES ('Recommendation','Other'), ('Review', 'Marketing'), ('Internet', 'Promotion'))
       AS [Source] ([NewName], NewReasonType)
ON [Target].[Name] = [Source].[NewName]
WHEN MATCHED
THEN UPDATE SET ReasonType = [Source].NewReasonType
WHEN NOT MATCHED BY TARGET
THEN INSERT ([Name], ReasonType) VALUES ([NewName], NewReasonType)
OUTPUT $action INTO @SummaryOfChanges;

SELECT ProductID, OrderQty, SUM(LineTotal) AS Total
FROM Sales.SalesOrderDetail
WHERE UnitPrice < $5.00
GROUP BY ProductID, OrderQty
ORDER BY ProductID, OrderQty
OPTION (HASH GROUP, FAST 10);
`;

  options = {
    theme: 'vs-light',
    language: 'sql',
  };

  rows = [
    {
      name: 'John Doe',
      age: 25,
      city: 'New York',
      job: 'Engineer',
      company: 'TechCorp',
      hobby: 'Photography',
      salary: 75000,
      state: 'NY',
      zip: '10001',
      phone: '123-456-7890',
      email: 'john.doe@example.com',
      status: 'Active',
    },
    {
      name: 'Jane Smith',
      age: 30,
      city: 'San Francisco',
      job: 'Designer',
      company: 'DesignPro',
      hobby: 'Painting',
      salary: 85000,
      state: 'CA',
      zip: '94105',
      phone: '987-654-3210',
      email: 'jane.smith@example.com',
      status: 'Active',
    },
    {
      name: 'Mike Johnson',
      age: 35,
      city: 'Chicago',
      job: 'Manager',
      company: 'BizGroup',
      hobby: 'Cycling',
      salary: 95000,
      state: 'IL',
      zip: '60601',
      phone: '555-666-7777',
      email: 'mike.johnson@example.com',
      status: 'Inactive',
    },
    {
      name: 'Emily Davis',
      age: 28,
      city: 'Seattle',
      job: 'Developer',
      company: 'WebDevCo',
      hobby: 'Hiking',
      salary: 72000,
      state: 'WA',
      zip: '98101',
      phone: '444-555-6666',
      email: 'emily.davis@example.com',
      status: 'Active',
    },
    {
      name: 'Chris Brown',
      age: 40,
      city: 'Austin',
      job: 'Architect',
      company: 'BuildIt',
      hobby: 'Cooking',
      salary: 110000,
      state: 'TX',
      zip: '73301',
      phone: '111-222-3333',
      email: 'chris.brown@example.com',
      status: 'Active',
    },
    {
      name: 'Sophia Wilson',
      age: 32,
      city: 'Denver',
      job: 'Analyst',
      company: 'DataCorp',
      hobby: 'Yoga',
      salary: 80000,
      state: 'CO',
      zip: '80202',
      phone: '333-444-5555',
      email: 'sophia.wilson@example.com',
      status: 'Active',
    },
    {
      name: 'Ryan Taylor',
      age: 29,
      city: 'Boston',
      job: 'Consultant',
      company: 'Advisory LLC',
      hobby: 'Running',
      salary: 88000,
      state: 'MA',
      zip: '02108',
      phone: '777-888-9999',
      email: 'ryan.taylor@example.com',
      status: 'Inactive',
    },
    {
      name: 'Megan White',
      age: 26,
      city: 'Orlando',
      job: 'Teacher',
      company: 'EduWorld',
      hobby: 'Traveling',
      salary: 52000,
      state: 'FL',
      zip: '32801',
      phone: '999-111-2222',
      email: 'megan.white@example.com',
      status: 'Active',
    },
    {
      name: 'Ethan Moore',
      age: 37,
      city: 'Atlanta',
      job: 'Accountant',
      company: 'FinanceCo',
      hobby: 'Fishing',
      salary: 78000,
      state: 'GA',
      zip: '30301',
      phone: '888-999-0000',
      email: 'ethan.moore@example.com',
      status: 'Active',
    },
    {
      name: 'Olivia Green',
      age: 34,
      city: 'Phoenix',
      job: 'Sales Rep',
      company: 'MarketPlus',
      hobby: 'Reading',
      salary: 67000,
      state: 'AZ',
      zip: '85001',
      phone: '666-777-8888',
      email: 'olivia.green@example.com',
      status: 'Inactive',
    },
  ];

  columns = [
    { prop: 'name', name: 'Name' },
    { prop: 'age', name: 'Age' },
    { prop: 'city', name: 'City' },
    { prop: 'job', name: 'Job' },
    { prop: 'company', name: 'Company' },
    { prop: 'hobby', name: 'Hobby' },
    { prop: 'salary', name: 'Salary' },
    { prop: 'state', name: 'State' },
    { prop: 'zip', name: 'Zip Code' },
    { prop: 'phone', name: 'Phone' },
    { prop: 'email', name: 'Email' },
    { prop: 'status', name: 'Status' },
  ];

  page = 1;
  pageSize = 10;
  totalPages = Math.ceil(this.rows.length / this.pageSize);
  paginatedRows = this.rows.slice(0, this.pageSize);

  previousPage(): void {
    if (this.page > 1) {
      this.page--;
      this.updatePagination();
    }
  }

  nextPage(): void {
    if (this.page < this.totalPages) {
      this.page++;
      this.updatePagination();
    }
  }

  updatePagination(): void {
    const startIndex = (this.page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedRows = this.rows.slice(startIndex, endIndex);
  }

  ngOnInit() {}

  ngAfterViewInit() {}

  onInit(editor: any): void {
    this.editorInstance = editor;
  }

  onGutterResize(): void {
    if (this.editorInstance) {
      this.editorInstance.layout();
    }
  }
}

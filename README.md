# Learning System Management
Backend for Learning Systems

# ERD

Using Relational Database Postgresql
With Prisma ORM

**Users**:

|Attr|Type|
|-----|------|
|id|uuid/String|
|name|String|
|email|String|
|password|String|
|phone|String|
|type|enum|
|created_at|date|
|updated_at|date|

**Courses**:

|Attr|Type|
|-----|------|
|id|uuid/String|
|title|String|
|description|String|
|class|uuid->ClassRooms|
|group|uuid->Groups|
|created_at|date|
|updated_at|date|

**ClassRooms**

|Attr|Type|
|-----|------|
|id|uuid/String|
|name|String|
|created_at|date|
|updated_at|date|

**Groups**

|Attr|Type|
|-----|------|
|id|uuid/String|
|num|int|
|created_at|date|
|updated_at|date|

**Lecature**

|Attr|Type|
|-----|------|
|id|uuid/String|
|title|String|
|description|String|
|url|String|
|date|date|
|course|uuid->Courses|
|group|uuid->Groups|
|class|uuid->ClassRooms|
|created_at|date|
|updated_at|date|

**Tasks**

|Attr|Type|
|-----|------|
|id|uuid/String|
|title|String|
|description|String|
|deadline|date|
|course|uuid->Courses|
|group|uuid->Groups|
|class|uuid->ClassRooms|
|created_at|date|
|updated_at|date|

**Submissions**

|Attr|Type|
|-----|------|
|id|uuid/String|
|task|uuid->Tasks|
|user|uuid->Users|
|status|enum|
|file|String|
|created_at|date|
|updated_at|date|

**Grades**

|Attr|Type|
|-----|------|
|id|uuid/String|
|user|uuid->Users|
|task|uuid->Tasks|
|grade|int|
|created_at|date|
|updated_at|date|

**Comments**

|Attr|Type|
|-----|------|
|id|uuid/String|
|user|uuid->Users|
|task|uuid->Tasks|
|lecture|uuid->Lecature|
|comment|String|
|created_at|date|
|updated_at|date|

**Notifications**

|Attr|Type|
|-----|------|
|id|uuid/String|
|user|uuid->Users|
|task|uuid->Tasks|
|lecture|uuid->Lecature|
|email|String|
|created_at|date|
|updated_at|date|

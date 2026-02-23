-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('OWNER', 'STAFF', 'VIEWER');

-- CreateEnum
CREATE TYPE "VehicleStatus" AS ENUM ('AVAILABLE', 'PENDING', 'SOLD', 'DRAFT');

-- CreateEnum
CREATE TYPE "BodyType" AS ENUM ('SEDAN', 'COUPE', 'HATCHBACK', 'WAGON', 'SUV', 'TRUCK', 'VAN', 'CONVERTIBLE', 'OTHER');

-- CreateEnum
CREATE TYPE "Drivetrain" AS ENUM ('FWD', 'RWD', 'AWD', 'FOUR_WD');

-- CreateEnum
CREATE TYPE "FuelType" AS ENUM ('GASOLINE', 'DIESEL', 'HYBRID', 'ELECTRIC', 'PLUG_IN_HYBRID');

-- CreateEnum
CREATE TYPE "Transmission" AS ENUM ('AUTOMATIC', 'MANUAL', 'CVT', 'DCT');

-- CreateEnum
CREATE TYPE "SubmissionStatus" AS ENUM ('NEW', 'CONTACTED', 'IN_PROGRESS', 'COMPLETED', 'ARCHIVED');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "passwordHash" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'STAFF',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lastLoginAt" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehicles" (
    "id" TEXT NOT NULL,
    "vin" TEXT NOT NULL,
    "stockNumber" TEXT,
    "year" INTEGER NOT NULL,
    "make" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "trim" TEXT,
    "bodyType" "BodyType",
    "drivetrain" "Drivetrain",
    "fuelType" "FuelType",
    "transmission" "Transmission",
    "engine" TEXT,
    "cylinders" INTEGER,
    "odometerKm" INTEGER NOT NULL,
    "priceCents" INTEGER NOT NULL,
    "status" "VehicleStatus" NOT NULL DEFAULT 'AVAILABLE',
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "exteriorColor" TEXT,
    "interiorColor" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "carfaxUrl" TEXT,
    "seoSlug" TEXT NOT NULL,
    "publishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" TEXT NOT NULL,

    CONSTRAINT "vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehicle_photos" (
    "id" TEXT NOT NULL,
    "vehicleId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "altText" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "vehicle_photos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehicle_features" (
    "id" TEXT NOT NULL,
    "vehicleId" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "feature" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "vehicle_features_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activity_logs" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT,
    "details" JSONB,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "activity_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact_submissions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "message" TEXT NOT NULL,
    "vehicleInterest" TEXT,
    "status" "SubmissionStatus" NOT NULL DEFAULT 'NEW',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contact_submissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "financing_applications" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "vehicleInterest" TEXT,
    "status" "SubmissionStatus" NOT NULL DEFAULT 'NEW',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "financing_applications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trade_in_requests" (
    "id" TEXT NOT NULL,
    "vehicle" TEXT NOT NULL,
    "mileage" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "status" "SubmissionStatus" NOT NULL DEFAULT 'NEW',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "trade_in_requests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "vehicles_vin_key" ON "vehicles"("vin");

-- CreateIndex
CREATE UNIQUE INDEX "vehicles_stockNumber_key" ON "vehicles"("stockNumber");

-- CreateIndex
CREATE UNIQUE INDEX "vehicles_seoSlug_key" ON "vehicles"("seoSlug");

-- CreateIndex
CREATE INDEX "vehicles_status_make_model_idx" ON "vehicles"("status", "make", "model");

-- CreateIndex
CREATE INDEX "vehicles_status_isFeatured_idx" ON "vehicles"("status", "isFeatured");

-- CreateIndex
CREATE INDEX "vehicles_status_createdAt_idx" ON "vehicles"("status", "createdAt");

-- CreateIndex
CREATE INDEX "vehicles_make_year_idx" ON "vehicles"("make", "year");

-- CreateIndex
CREATE INDEX "vehicles_priceCents_idx" ON "vehicles"("priceCents");

-- CreateIndex
CREATE INDEX "vehicles_year_idx" ON "vehicles"("year");

-- CreateIndex
CREATE INDEX "vehicles_odometerKm_idx" ON "vehicles"("odometerKm");

-- CreateIndex
CREATE INDEX "vehicles_createdAt_idx" ON "vehicles"("createdAt");

-- CreateIndex
CREATE INDEX "vehicles_seoSlug_idx" ON "vehicles"("seoSlug");

-- CreateIndex
CREATE INDEX "vehicles_isFeatured_idx" ON "vehicles"("isFeatured");

-- CreateIndex
CREATE INDEX "vehicle_photos_vehicleId_sortOrder_idx" ON "vehicle_photos"("vehicleId", "sortOrder");

-- CreateIndex
CREATE INDEX "vehicle_features_vehicleId_idx" ON "vehicle_features"("vehicleId");

-- CreateIndex
CREATE INDEX "activity_logs_userId_createdAt_idx" ON "activity_logs"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "activity_logs_entityType_entityId_idx" ON "activity_logs"("entityType", "entityId");

-- CreateIndex
CREATE INDEX "contact_submissions_email_idx" ON "contact_submissions"("email");

-- CreateIndex
CREATE INDEX "contact_submissions_status_idx" ON "contact_submissions"("status");

-- CreateIndex
CREATE INDEX "contact_submissions_createdAt_idx" ON "contact_submissions"("createdAt");

-- CreateIndex
CREATE INDEX "financing_applications_email_idx" ON "financing_applications"("email");

-- CreateIndex
CREATE INDEX "financing_applications_status_idx" ON "financing_applications"("status");

-- CreateIndex
CREATE INDEX "financing_applications_createdAt_idx" ON "financing_applications"("createdAt");

-- CreateIndex
CREATE INDEX "trade_in_requests_email_idx" ON "trade_in_requests"("email");

-- CreateIndex
CREATE INDEX "trade_in_requests_status_idx" ON "trade_in_requests"("status");

-- CreateIndex
CREATE INDEX "trade_in_requests_createdAt_idx" ON "trade_in_requests"("createdAt");

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicle_photos" ADD CONSTRAINT "vehicle_photos_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "vehicles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicle_features" ADD CONSTRAINT "vehicle_features_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "vehicles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_logs" ADD CONSTRAINT "activity_logs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

